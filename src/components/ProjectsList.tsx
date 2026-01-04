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
            <div className="mb-8 space-y-4">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Tag Filter */}
                {allTags.length > 0 && (
                    <div>
                        <div className="text-sm font-semibold text-gray-600 mb-2">Filter by tags:</div>
                        <div className="flex flex-wrap gap-2">
                            {allTags.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                                        selectedTags.has(tag)
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
                    <div className="text-sm text-gray-600">
                        Showing {filteredProjects.length} of {projects.length} projects
                        {(searchQuery || selectedTags.size > 0) && (
                            <button
                                onClick={() => {
                                    setSearchQuery("")
                                    setSelectedTags(new Set())
                                }}
                                className="ml-2 text-blue-500 hover:underline"
                            >
                                Clear filters
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Projects List */}
            <div className="space-y-6">
                {filteredProjects.map(p => (
                    <div key={p.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <Link href={`/projects/${p.slug}`} className="block group">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                                    {p.metadata.title}
                                </h2>
                                {p.date && (
                                    <span className="text-sm text-gray-500">
                                        {p.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                                    </span>
                                )}
                            </div>
                            {p.metadata.desc && (
                                <p className="text-gray-600 mb-3">{p.metadata.desc}</p>
                            )}
                            {p.metadata.tags && p.metadata.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {p.metadata.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </Link>
                    </div>
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
