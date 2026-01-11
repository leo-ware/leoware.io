

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-fit min-h-full grid grid-cols-12 gap-6 max-w-7xl pb-10 pt-6">
            {children}
        </div>
    )
}

export default ProjectsLayout