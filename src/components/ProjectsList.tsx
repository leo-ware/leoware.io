"use client"

import { useState, useMemo } from "react"
import Link from "next/link"

type Project = {
    slug: string
    metadata: {
        title?: string
        desc?: string
        date?: string
        github?: string
        tags?: string[]
    }
    date: Date | null
}

export default function ProjectsList({ projects }: { projects: Project[] }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())

    // Get all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>()
        projects.forEach(p => {
            p.metadata.tags?.forEach(tag => tags.add(tag))
        })
        return Array.from(tags).sort()
    }, [projects])

    // Filter projects
    const filteredProjects = useMemo(() => {
        return projects.filter(p => {
            // Search filter
            const matchesSearch = searchQuery === "" ||
                p.metadata.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.metadata.desc?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.metadata.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

            // Tag filter
            const matchesTags = selectedTags.size === 0 ||
                p.metadata.tags?.some(tag => selectedTags.has(tag))

            return matchesSearch && matchesTags
        })
    }, [projects, searchQuery, selectedTags])

    const toggleTag = (tag: string) => {
        const newTags = new Set(selectedTags)
        if (newTags.has(tag)) {
            newTags.delete(tag)
        } else {
            newTags.add(tag)
        }
        setSelectedTags(newTags)
    }

    return (
        <div className="w-full">
            {/* Search and Filter Controls */}
            <div className="mb-10 space-y-6">
                {/* Search Bar */}
                <div>
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-5 py-3 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg transition-all"
                    />
                </div>

                {/* Tag Filter */}
                {allTags.length > 0 && (
                    <div>
                        <div className="text-sm font-semibold text-neutral-600 mb-3">Filter by topic:</div>
                        <div className="flex flex-wrap gap-2">
                            {allTags.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        selectedTags.has(tag)
                                            ? 'bg-primary-700 text-white shadow-sm'
                                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Active Filters Display */}
                {(searchQuery || selectedTags.size > 0) && (
                    <div className="flex items-center gap-3 text-sm text-neutral-600 pt-2">
                        <span className="font-medium">
                            {filteredProjects.length} of {projects.length} projects
                        </span>
                        <button
                            onClick={() => {
                                setSearchQuery("")
                                setSelectedTags(new Set())
                            }}
                            className="text-primary-700 hover:text-primary-900 font-medium transition-colors"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>

            {/* Projects List */}
            <div className="space-y-6">
                {filteredProjects.map(p => (
                    <article key={p.slug} className="card group">
                        <Link href={`/projects/${p.slug}`} className="block">
                            <div className="flex justify-between items-start gap-4 mb-3">
                                <h2 className="text-2xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors flex-1">
                                    {p.metadata.title}
                                </h2>
                                {/* {p.date && (
                                    <time className="text-sm text-neutral-500 font-medium whitespace-nowrap">
                                        {p.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                                    </time>
                                )} */}
                            </div>
                            {p.metadata.desc && (
                                <p className="text-neutral-700 mb-4 leading-relaxed">{p.metadata.desc}</p>
                            )}
                            {p.metadata.tags && p.metadata.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {p.metadata.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium bg-primary-50 text-primary-700 border border-primary-200 px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </Link>
                    </article>
                ))}

                {filteredProjects.length === 0 && (
                    <div className="text-center text-gray-500 py-12">
                        No projects found matching your filters.
                    </div>
                )}
            </div>
        </div>
    )
}
