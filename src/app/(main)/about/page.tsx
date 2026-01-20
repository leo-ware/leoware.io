import Link from "next/link";

const About = () => (
  <div className="col-span-12 lg:col-span-8 lg:col-start-3 min-h-full">
    <h1 className="text-5xl font-bold text-primary-900 mb-12">About</h1>
    <div className="space-y-8 text-lg leading-relaxed">
      <div className="border-l-4 border-primary-300 pl-6">
        <p className="text-xl text-neutral-800 font-medium">
          I'm a data scientist and full-stack developer finishing my MS in
          Biostatistics at West Virginia University (May 2026).
        </p>
      </div>
      <p>
        I work as a biostatistician at the{" "}
        <Link
          href="https://www.wvctsi.org/programs/epidemiology-biostatistics-data/biostatistics-epidemiology-research-design/"
          target="_blank"
          className="font-semibold text-primary-800 hover:underline"
        >
          West Virginia Clinical and Translational Science Institute
        </Link>{" "}
        (WVU CTSI), where I provide statistical support for clinical and
        translational research projects. This includes study design, power
        analysis, and data analysis for researchers across the university.
      </p>
      <p>
        My background combines statistical training with hands-on engineering.
        For my undergraduate thesis at Minerva University, I worked on causal
        identification algorithms and found a bug in Microsoft Research's{" "}
        <Link
          href="https://github.com/py-why/dowhy"
          target="_blank"
          className="font-semibold text-primary-800 hover:underline"
        >
          DoWhy library
        </Link>{" "}
        that was invalidating roughly half of their significance tests. I built
        my own implementation that was more general and 60% faster.
      </p>
      <p>
        I've worked as an AI engineering intern at{" "}
        <Link
          href="https://www.userhetoric.com/"
          target="_blank"
          className="font-semibold text-primary-800 hover:underline"
        >
          Rhetoric
        </Link>
        , where I built LLM-based extraction pipelines, and done contract
        development for startups building ML-powered products and full-stack web
        apps. I write{" "}
        <span className="font-mono text-sm bg-neutral-100 px-2 py-1 rounded">
          Python
        </span>
        ,{" "}
        <span className="font-mono text-sm bg-neutral-100 px-2 py-1 rounded">
          TypeScript
        </span>
        ,{" "}
        <span className="font-mono text-sm bg-neutral-100 px-2 py-1 rounded">
          R
        </span>
        , and occasionally{" "}
        <span className="font-mono text-sm bg-neutral-100 px-2 py-1 rounded">
          Rust
        </span>
        .
      </p>
      <p>
        I did my undergrad at{" "}
        <Link
          href="https://minerva.edu/"
          target="_blank"
          className="font-semibold text-primary-800 hover:underline"
        >
          Minerva University
        </Link>
        , where I studied statistics and computer science and spent semesters in
        San Francisco, London, Seoul, Berlin, Buenos Aires, and Taipei.
      </p>
      <p className="text-neutral-600 italic">
        In my free time, I enjoy cooking, epistemology, and learning new
        languages.
      </p>
    </div>
  </div>
);
export default About;
