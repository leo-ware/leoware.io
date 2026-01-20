"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

type Category = "Research" | "Consulting" | "Writing"

type Project = {
    slug: string
    metadata: {
        title?: string
        desc?: string
        date?: string
        github?: string
        tags?: string[]
        category?: Category
    }
    date: Date | null
}

const CATEGORIES: Category[] = ["Research", "Consulting", "Writing"]

function TagDropdown({
    allTags,
    selectedTags,
    onToggleTag,
    onClearAll,
    isOpen,
    setIsOpen
}: {
    allTags: string[]
    selectedTags: Set<string>
    onToggleTag: (tag: string) => void
    onClearAll: () => void
    isOpen: boolean
    setIsOpen: (open: boolean) => void
}) {
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-all ${
                    selectedTags.size > 0
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100'
                }`}
                title="Filter by tag"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                {selectedTags.size > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary-700 text-white text-xs rounded-full flex items-center justify-center">
                        {selectedTags.size}
                    </span>
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-56 bg-white border border-neutral-200 rounded-lg shadow-lg z-50 overflow-hidden"
                    >
                        <div className="px-4 py-2 border-b border-neutral-100">
                            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Filter by tag</span>
                        </div>
                        <div className="max-h-64 overflow-y-auto py-2">
                            {allTags.map(tag => (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => onToggleTag(tag)}
                                    className="flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-neutral-50 cursor-pointer transition-colors"
                                >
                                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                                        selectedTags.has(tag)
                                            ? 'bg-primary-700 border-primary-700'
                                            : 'border-neutral-300'
                                    }`}>
                                        {selectedTags.has(tag) && (
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </div>
                                    <span className="text-sm text-neutral-700">{tag}</span>
                                </button>
                            ))}
                        </div>
                        {selectedTags.size > 0 && (
                            <div className="border-t border-neutral-100 px-4 py-2">
                                <button
                                    type="button"
                                    onClick={onClearAll}
                                    className="text-xs text-primary-700 hover:text-primary-900 font-medium transition-colors"
                                >
                                    Clear all
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function ProjectsList({ projects }: { projects: Project[] }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<Category>("Research")
    const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
    const [isSearchFocused, setIsSearchFocused] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    // Get all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>()
        projects.forEach(p => {
            p.metadata.tags?.forEach(tag => tags.add(tag))
        })
        return Array.from(tags).sort()
    }, [projects])

    const isSearching = searchQuery.length > 0

    // Filter projects
    const filteredProjects = useMemo(() => {
        return projects.filter(p => {
            // When searching, ignore category filter
            if (isSearching) {
                const matchesSearch =
                    p.metadata.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.metadata.desc?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.metadata.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

                const matchesTags = selectedTags.size === 0 ||
                    p.metadata.tags?.some(tag => selectedTags.has(tag))

                return matchesSearch && matchesTags
            }

            // Normal category-based filtering
            const matchesCategory = p.metadata.category === selectedCategory

            const matchesTags = selectedTags.size === 0 ||
                p.metadata.tags?.some(tag => selectedTags.has(tag))

            return matchesCategory && matchesTags
        })
    }, [projects, searchQuery, selectedCategory, selectedTags, isSearching])

    const toggleTag = (tag: string) => {
        const newTags = new Set(selectedTags)
        if (newTags.has(tag)) {
            newTags.delete(tag)
        } else {
            newTags.add(tag)
        }
        setSelectedTags(newTags)
    }

    const clearTags = () => {
        setSelectedTags(new Set())
    }

    const clearSearch = () => {
        setSearchQuery("")
        setSelectedTags(new Set())
    }

    // Show filter button when search is focused, has content, has selected tags, or dropdown is open
    const showFilterButton = isSearchFocused || isSearching || selectedTags.size > 0 || isFilterOpen

    return (
        <div className="w-full">
            {/* Search Bar */}
            <div className="mb-6">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => {
                            // Delay to allow clicking filter button
                            setTimeout(() => setIsSearchFocused(false), 200)
                        }}
                        className="w-full px-5 py-3 pr-12 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg transition-all"
                    />
                    <div className="absolute right-2">
                        <AnimatePresence>
                            {showFilterButton && allTags.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <TagDropdown
                                        allTags={allTags}
                                        selectedTags={selectedTags}
                                        onToggleTag={toggleTag}
                                        onClearAll={clearTags}
                                        isOpen={isFilterOpen}
                                        setIsOpen={setIsFilterOpen}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Tabs or Search Results Header */}
            <div className="mb-6">
                {isSearching ? (
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-neutral-700">
                            Search Results ({filteredProjects.length})
                        </span>
                        <button
                            type="button"
                            onClick={clearSearch}
                            className="text-sm text-primary-700 hover:text-primary-900 font-medium transition-colors flex items-center gap-1"
                        >
                            Clear <span className="text-lg leading-none">&times;</span>
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-1">
                        {CATEGORIES.map(category => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    selectedCategory === category
                                        ? 'bg-primary-700 text-white shadow-sm'
                                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Selected Tags Display */}
            {selectedTags.size > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {Array.from(selectedTags).map(tag => (
                        <button
                            key={tag}
                            type="button"
                            onClick={() => toggleTag(tag)}
                            className="inline-flex items-center gap-1 text-xs font-medium bg-primary-100 text-primary-800 px-3 py-1.5 rounded-full hover:bg-primary-200 transition-colors"
                        >
                            {tag}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    ))}
                </div>
            )}

            {/* Projects List */}
            <div className="space-y-6">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map(p => (
                        <motion.article
                            key={p.slug}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="card group"
                        >
                            <Link href={`/projects/${p.slug}`} className="block">
                                <div className="flex justify-between items-start gap-4 mb-3">
                                    <h2 className="text-2xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors flex-1">
                                        {p.metadata.title}
                                    </h2>
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
                        </motion.article>
                    ))}
                </AnimatePresence>

                {filteredProjects.length === 0 && (
                    <div className="text-center text-gray-500 py-12">
                        No projects found{isSearching ? " matching your search" : " in this category"}.
                    </div>
                )}
            </div>
        </div>
    )
}
