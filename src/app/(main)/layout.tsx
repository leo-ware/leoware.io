

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="sm:px-10 md:w-8/12 lg:w-7/12 w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default ProjectsLayout