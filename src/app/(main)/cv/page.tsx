import cv from "./cv.json"

const Widget = ({ title, contents }: { title: string, contents: React.ReactNode[] }) => (
    <div className="my-2">
        <div className="text-lg font-bold mb-2">{title}</div>
        {contents.map((exp, i) => (
            <div key={i} className="mb-4">
                {exp}
            </div>
        ))}
    </div>
)

const CV = () => {
    return (
        <div className="w-full h-full">
            <div className="text-4xl font-bold flex justify-center my-10">Resume</div>

            <Widget
                title="Experience"
                contents={cv.Experience.map((exp, i) => (
                    <div className="w-full h-fit" key={i}>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="text-sm font-bold">{exp.Company}</div>
                            <div className="md:hidden text-sm">{exp.Title}</div>
                            <div className="text-xs md:text-sm">{exp.Dates}</div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="hidden md:block text-sm">{exp.Title}</div>
                            <div className="text-xs md:text-sm">{exp.Location}</div>
                        </div>
                        <div className="ml-8">
                            <ul className="list-disc">
                                {exp.Description?.map(desc => (
                                    <li className="text-sm" key={desc}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))} />

            <Widget
                title="Education"
                contents={cv.Education.map((ed, i) => (
                    <div className="w-full h-fit" key={i}>
                        <div className="flex justify-between">
                            <div className="text-sm font-bold">{ed.Institution}</div>
                            <div className="text-sm">{ed.Dates}</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-sm">{ed.Degree}</div>
                            <div className="text-sm">{ed.Location}</div>
                        </div>
                        <div className="ml-8">
                            <ul className="list-disc">
                                {ed.Description?.map(desc => (
                                    <li key={desc} className="text-sm">{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}/>
            
            <Widget
                title="Awards"
                contents={cv.Awards.map((award, i) => (
                    <div className="w-full h-fit" key={i}>
                        <div className="text-sm">{award}</div>
                    </div>
                ))}
            />

        </div>
    );
}

export default CV

// {
//     "Company": "West Virginia University",
//     "Title": "Research Assistant",
//     "Location": "Morgantown, WV",
//     "Dates": "December 2023 - Present",
//     "Description": [
//         "Developed a custom model validation pipeline, proving that a published result overestimated model performance by 2x",
//         "Developed a multi-threaded implementation of proposed ML technique, showing 5x speedup in training time relative to a prototype",
//         "Improved on the design of the technique, leading to 30% improved fit",
//         "Improved training times on another key model by 30x by migrating to scikit-learn"
//     ]
// },
