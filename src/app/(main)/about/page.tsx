const About = () => (
    <div className="col-span-12 lg:col-span-8 lg:col-start-3 min-h-screen py-16">
        <h1 className="text-5xl font-bold text-primary-900 mb-12">About</h1>

        <div className="space-y-8 text-lg leading-relaxed">
                <div className="border-l-4 border-primary-300 pl-6">
                    <p className="text-xl text-neutral-800 font-medium">
                        I'm a Master's student in Biostatistics at West Virginia University, graduating May 2026.
                        My research focuses on causal inference methods for healthcare applications.
                    </p>
                </div>

                <p>
                    My background combines statistical methodology with hands-on implementation. For my undergraduate
                    thesis at Minerva University, I worked on causal identification algorithms and found a bug in
                    Microsoft Research's <span className="font-semibold text-primary-800">DoWhy library</span> that
                    was invalidating roughly half of their significance tests. I built my own implementation that was
                    more general and 60% faster.
                </p>

                <p>
                    I've also worked as an AI engineering intern at <span className="font-semibold text-primary-800">Rhetoric</span>,
                    where I built LLM-based extraction pipelines, and done contract development for startups building
                    ML-powered products. I write <span className="font-mono text-sm bg-neutral-100 px-2 py-1 rounded">Python</span>,
                    {" "}<span className="font-mono text-sm bg-neutral-100 px-2 py-1 rounded">R</span>,
                    {" "}<span className="font-mono text-sm bg-neutral-100 px-2 py-1 rounded">TypeScript</span>, and occasionally
                    {" "}<span className="font-mono text-sm bg-neutral-100 px-2 py-1 rounded">Rust</span>.
                </p>

                <div className="bg-primary-50 border border-primary-100 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary-900 mb-4">Education Journey</h2>
                    <p>
                        I did my undergrad at <span className="font-semibold text-primary-800">Minerva University</span>,
                        where I studied statistics and computer science and had the chance to spend semesters in
                        San Francisco, London, Seoul, Berlin, Buenos Aires, and Taipei.
                    </p>
                </div>

                <p className="text-neutral-600 italic">
                    In my free time, I enjoy cooking, epistemology, and wandering around in countries where I don't
                    speak the language.
                </p>
        </div>
    </div>
)

export default About