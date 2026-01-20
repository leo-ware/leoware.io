import Link from "next/link";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import EmailCopyButton from "@/components/EmailCopyButton";

const contactLinks = [
	{
		name: "LinkedIn",
		icon: <FaLinkedin className="w-6 h-6" />,
		href: "https://www.linkedin.com/in/leo-ware-8b8580b6/",
		label: "linkedin.com/in/leo-ware",
		description: "Connect with me professionally.",
	},
	{
		name: "Telegram",
		icon: <FaTelegram className="w-6 h-6" />,
		href: "https://leoware.t.me",
		label: "@leoware",
		description: "For quick messages and informal chat.",
	},
];

const Contact = () => (
	<div className="col-span-12 lg:col-span-8 lg:col-start-3 min-h-full">
		<h1 className="text-5xl font-bold text-primary-900 mb-12">Contact</h1>
		<div className="space-y-8">
			<p className="text-lg leading-relaxed">
				I'm always happy to hear from people interested in
				collaboration, consulting work, or just saying hello. Feel free
				to reach out through any of the channels below.
			</p>

			<div className="space-y-4">
				<EmailCopyButton variant="card" />
				{contactLinks.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-start gap-4 p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-colors group"
					>
						<div className="text-primary-700 mt-0.5">
							{link.icon}
						</div>
						<div>
							<div className="font-semibold text-primary-800 group-hover:text-primary-700">
								{link.name}
							</div>
							<div className="text-sm text-neutral-600">
								{link.label}
							</div>
							<div className="text-sm text-neutral-500 mt-1">
								{link.description}
							</div>
						</div>
					</Link>
				))}
			</div>

			<div className="pt-8 border-t border-neutral-200">
				<h2 className="text-2xl font-bold text-primary-800 mb-4">
					Looking for consulting?
				</h2>
				<p className="text-lg leading-relaxed mb-4">
					If you're interested in biostatistical consulting or web
					development work, check out my consulting page or schedule a
					call directly.
				</p>
				<div className="flex flex-wrap gap-4">
					<Link
						href="/consulting"
						className="inline-block px-4 py-2 bg-primary-700 text-white text-sm font-semibold rounded-lg hover:bg-primary-800 transition-colors"
					>
						View Consulting Services
					</Link>
					<Link
						href="https://calendly.com/leobpware/1-hour-meeting"
						target="_blank"
						className="inline-block px-4 py-2 border border-primary-700 text-primary-700 text-sm font-semibold rounded-lg hover:bg-primary-50 transition-colors"
					>
						Schedule a Call
					</Link>
				</div>
			</div>
		</div>
	</div>
);

export default Contact;
