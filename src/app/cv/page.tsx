import cv from "./cv.json"

const Widget = ({ title, contents }: { title: string, contents: React.ReactNode[] }) => (
    <div className="grid grid-cols-subgrid col-span-8 my-2">
        <div className="col-start-2 col-span-6 text-lg font-bold mb-2">{title}</div>
        {contents.map((exp, i) => (
            <div key={i} className="col-start-2 col-span-6 mb-4">
                {exp}
            </div>
        ))}
    </div>
)

const CV = () => {
    return (
        <div className="col-span-8 grid grid-cols-subgrid">
            <div className="text-4xl col-span-8 font-bold flex justify-center my-10">Resume</div>

            <Widget
                title="Experience"
                contents={cv.Experience.map(exp => (
                    <>
                        <div className="flex justify-between">
                            <div className="text-sm font-bold">{exp.Company}</div>
                            <div className="text-sm">{exp.Dates}</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-sm">{exp.Title}</div>
                            <div className="text-sm">{exp.Location}</div>
                        </div>
                        <div className="ml-8">
                            <ul className="list-disc">
                                {exp.Description.map(desc => (
                                    <li className="text-sm" key={desc}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                ))} />

            <Widget
                title="Education"
                contents={cv.Education.map(ed => (
                    <>
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
                                {ed.Description.map(desc => (
                                    <li key={desc} className="text-sm">{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                ))}/>
            
            <Widget
                title="Awards"
                contents={[cv.Awards.map((award, i) => (
                    <div key={i} className="text-sm">{award}</div>
                ))]}
            />

        </div>
    );
}

export default CV