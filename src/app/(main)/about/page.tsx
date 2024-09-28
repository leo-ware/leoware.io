import { redirect } from "next/navigation";

const About = () => (
    <div className="w-full h-full">
        <div className="text-4xl font-bold flex justify-center my-10">About</div>
        <div className="flex flex-col gap-4">
            <p>
                I'm currently a Masters student in Biostatistics at West Virginia University, where I
                work on Bayesian modeling of infectious disease spread.
                I also work for an AI startup focused on building LLM-powered educational tools.
            </p>
            <p>
                Previously, I did an internship in the Human Computer Interaction Institute at Carnegie Mellon University,
                where I worked on interfaces that allow users to work interactively with AI models
                on data processing.
                I spent the summer of 2021 in San Francisco working on a SoftBank funded project on academic collaboration.
            </p>
            <p>
                I did my undergrad at Minerva University, where I pursued a major in Computational
                Sciences with a concentration in Data Science and Statistics.
                At Minerva, I spent a year in San Francisco and then had the chance to spend semesters abroad in London,
                Seoul, Berlin, Buenos Aires, and Taipei. I wrote my undergraduate thesis on computational tools
                for identification in structural causal models.
            </p>
            <p>
                My primary expertise is in computational statistics and causal inference, but I have also worked in software engineering.
                I write Python, Typescript, and Rust.
            </p>
        </div>
    </div>
)

export default About