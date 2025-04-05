import { redirect } from "next/navigation";

const About = () => (
    <div className="w-full h-full">
        <div className="text-4xl font-bold flex justify-center my-10">About</div>
        <div className="flex flex-col gap-4">
            <p>
                I'm currently a Masters student in Biostatistics at West Virginia University, where I'm
                focused on upskilling in theoretical statistics and bioinformatics.
                My research is focused on modeling of extreme events in time series data.
            </p>
            <p>
                I've been very influenced by the Effective Altruism movement.
                I'm hoping to find a position in either AI safety or biosecurity where I can have
                high counterfactual impact robust to median timelines.
                I'm at my best solving problems that require understanding technical fields at multiple levels
                of abstraction and working across these levels to make progress.
            </p>
            <p>
                Most recently, I worked for an edtech startup using LLMs to generate personalized educational content.
                In past, I've done traditional machine learning research as well as human-computer interaction research 
                on collaboration between humans and language models.
                My primary expertise is in software engineering and data science.
                I write Python, Typescript, R, and (occasionally) Rust.
            </p>
            <p>
                I did my undergrad at Minerva University, where I studied statistics and computer science.
                At Minerva, I spent a year in San Francisco and then had the chance to spend semesters abroad in London,
                Seoul, Berlin, Buenos Aires, and Taipei. I wrote my undergraduate thesis on computational tools
                for identification in structural causal models.
            </p>
            <p>
                In my free time, I enjoy cooking, epistemology, and wandering around in countries 
                where I don't speak the language.
            </p>
        </div>
    </div>
)

export default About