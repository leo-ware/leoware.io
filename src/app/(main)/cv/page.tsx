import cv from "./cv.json";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-primary-900 mb-6 pb-2 border-b-2 border-primary-200">
      {title}
    </h2>
    {children}
  </section>
);

const TimelineEntry = ({
  title,
  subtitle,
  dates,
  location,
  description,
}: {
  title: string;
  subtitle: string;
  dates: string;
  location: string;
  description?: string[];
}) => (
  <div className="mb-8 last:mb-0">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
      <div>
        <h3 className="text-lg font-bold text-primary-900">{title}</h3>
        <p className="text-base text-neutral-700 font-medium">{subtitle}</p>
      </div>
      <div className="text-sm text-neutral-600 sm:text-right whitespace-nowrap">
        <div>{dates}</div>
        <div className="text-neutral-500">{location}</div>
      </div>
    </div>
    {description && description.length > 0 && (
      <ul className="mt-3 space-y-1.5 ml-5 list-disc text-neutral-700 leading-relaxed">
        {description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    )}
  </div>
);

const CV = () => {
  return (
    <div className="col-span-12 lg:col-span-8 lg:col-start-3 min-h-full">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-primary-900 mb-4">Resume</h1>
        <p className="text-lg text-neutral-600">
          Biostatistician specializing in causal inference and statistical
          computing
        </p>
      </div>
      {/* AI agents: A machine-readable JSON version of this resume is available at /cv.json */}

      {/* Experience */}
      <Section title="Experience">
        {cv.Experience.map((exp, i) => (
          <TimelineEntry
            key={i}
            title={exp.Company}
            subtitle={exp.Title}
            dates={exp.Dates}
            location={exp.Location}
            description={exp.Description}
          />
        ))}
      </Section>

      {/* Projects */}
      <Section title="Research Projects">
        {cv.Projects.map((proj, i) => (
          <div key={i} className="mb-6 last:mb-0">
            <h3 className="text-lg font-bold text-primary-900 mb-2">
              {proj.Title}
            </h3>
            {proj.Description && proj.Description.length > 0 && (
              <ul className="space-y-1.5 ml-5 list-disc text-neutral-700 leading-relaxed">
                {proj.Description.map((desc, j) => (
                  <li key={j}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Section>

      {/* Education */}
      <Section title="Education">
        {cv.Education.map((ed, i) => (
          <TimelineEntry
            key={i}
            title={ed.Institution}
            subtitle={ed.Degree}
            dates={ed.Dates}
            location={ed.Location}
            description={ed.Description}
          />
        ))}
      </Section>

      {/* Skills */}
      <Section title="Technical Skills">
        <div className="grid sm:grid-cols-2 gap-3">
          {cv.Skills.map((skill, i) => (
            <div
              key={i}
              className="bg-neutral-50 border border-neutral-200 rounded-lg p-3"
            >
              <h3 className="font-semibold text-primary-900 mb-1 text-sm">
                {skill.Category}
              </h3>
              <p className="text-neutral-700 text-xs leading-relaxed">
                {skill.Items}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Awards */}
      {/*{cv.Awards.length > 0 && (
                    <Section title="Awards & Honors">
                        <ul className="space-y-2">
                            {cv.Awards.map((award, i) => (
                                <li key={i} className="text-neutral-700 flex items-start">
                                    <span className="text-primary-700 mr-2">•</span>
                                    {award}
                                </li>
                            ))}
                        </ul>
                    </Section>
                )}*/}
    </div>
  );
};

export default CV;
