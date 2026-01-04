

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto px-6">
                {children}
            </div>
        </div>
    )
}

export default ProjectsLayout