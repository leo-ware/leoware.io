import { redirect } from "next/navigation";

const About = () => (
    <div className="w-full h-full">
        <div className="text-4xl font-bold flex justify-center my-10">About</div>
        <div className="flex flex-col gap-4">
            <p>
                I'm a Master's student in Biostatistics at West Virginia University, graduating May 2026. My research focuses on causal inference methods for healthcare applications.
            </p>
            <p>
                My background combines statistical methodology with hands-on implementation. For my undergraduate thesis at Minerva University, I worked on causal identification algorithms and found a bug in Microsoft Research's DoWhy library that was invalidating roughly half of their significance tests. I built my own implementation that was more general and 60% faster.
            </p>
            <p>
                I've also worked as an AI engineering intern at Rhetoric, where I built LLM-based extraction pipelines, and done contract development for startups building ML-powered products. I write Python, R, TypeScript, and occasionally Rust.
            </p>
            <p>
                I did my undergrad at Minerva University, where I studied statistics and computer science and had the chance to spend semesters in San Francisco, London, Seoul, Berlin, Buenos Aires, and Taipei.
            </p>
            <p>
                In my free time, I enjoy cooking, epistemology, and wandering around in countries where I don't speak the language.
            </p>
        </div>
    </div>
)

export default About