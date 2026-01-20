import Link from "next/link";
import EmailCopyButton from "@/components/EmailCopyButton";

const Consulting = () => (
	<div className="col-span-12 lg:col-span-8 lg:col-start-3 min-h-full">
		<h1 className="text-5xl font-bold text-primary-900 mb-12">
			Consulting
		</h1>
		<div className="space-y-12">
			<section>
				<h2 className="text-2xl font-bold text-primary-800 mb-4">
					WVU CTSI Biostatistical Consulting
				</h2>
				<div className="space-y-4 text-lg leading-relaxed">
					<p>
						I work as a biostatistician at the{" "}
						<Link
							href="https://www.wvctsi.org/"
							target="_blank"
							className="text-primary-700 hover:text-primary-800 underline"
						>
							West Virginia Clinical and Translational Science
							Institute
						</Link>{" "}
						(WVU CTSI), where I provide statistical support for
						clinical and translational research projects across West
						Virginia University.
					</p>
					<p>
						The CTSI is part of a national network of Clinical and
						Translational Science Award (CTSA) hubs funded by the
						NIH, dedicated to accelerating the translation of
						research discoveries into improved health outcomes. As
						part of this mission, I help researchers with study
						design, power analysis, statistical methodology, and
						data analysis for a wide range of biomedical research.
					</p>
					<p>
						If you're affiliated with WVU and seeking biostatistical
						support, please request services through the official
						CTSI portal.
					</p>
					<Link
						href="https://www.wvctsi.org/about-us/request-wvctsi-services/"
						target="_blank"
						className="inline-block px-4 py-2 bg-primary-700 text-white text-sm font-semibold rounded-lg hover:bg-primary-800 transition-colors"
					>
						Request CTSI Services
					</Link>
				</div>
			</section>

			<section>
				<h2 className="text-2xl font-bold text-primary-800 mb-4">
					Contract Work
				</h2>
				<div className="space-y-4 text-lg leading-relaxed">
					<p>
						Outside of my CTSI work, I'm available for contract
						projects in two main areas: biostatistical consulting
						and full-stack web development.
					</p>
					<h3 className="text-xl font-semibold text-primary-700 mt-6">
						Biostatistical Consulting
					</h3>
					<p>
						I provide statistical analysis and methodology support
						for research projects, with particular expertise in
						causal inference, clinical outcomes research, and
						healthcare analytics. My work includes study design
						consultation, power analysis, hypothesis testing,
						regression modeling, and manuscript preparation support.
					</p>
					<p>
						Recent biostatistics projects include a{" "}
						<Link
							href="/projects/septic-arthritis"
							className="text-primary-700 hover:text-primary-800 underline"
						>
							retrospective study on septic arthritis
						</Link>{" "}
						analyzing clinical outcomes in IV drug users, as well as
						an open-source tool for causal inference,{" "}
						<Link
							href="/projects/pqp"
							className="text-primary-700 hover:text-primary-800 underline"
						>
							pqp
						</Link>{" "}
						(a high-performance causal identification algorithm).
					</p>
					<h3 className="text-xl font-semibold text-primary-700 mt-6">
						Full-Stack Web Development
					</h3>
					<p>
						I build modern, performant web applications using
						Next.js, TypeScript, and React. Whether you need a
						marketing site, a web application, or a data dashboard,
						I can help bring your project to life.
					</p>
					<p>
						Recent web development projects include{" "}
						<Link
							href="/projects/return-to-freedom"
							className="text-primary-700 hover:text-primary-800 underline"
						>
							Return to Freedom
						</Link>
						, a website redesign for a wild horse conservation
						nonprofit (ongoing), and{" "}
						<Link
							href="/projects/telea-insights"
							className="text-primary-700 hover:text-primary-800 underline"
						>
							a marketing website for Telea Insights
						</Link>
						, a philanthropic consulting firm.
					</p>
					<p className="mt-6">
						Interested in working together? Let's set up a call to
						discuss your project, or send me an email.
					</p>
					<div className="flex flex-wrap gap-4">
						<Link
							href="https://calendly.com/leobpware/1-hour-meeting"
							target="_blank"
							className="inline-block px-4 py-2 bg-primary-700 text-white text-sm font-semibold rounded-lg hover:bg-primary-800 transition-colors"
						>
							Schedule a Call
						</Link>
						<EmailCopyButton variant="button" />
					</div>
				</div>
			</section>
		</div>
	</div>
);

export default Consulting;
