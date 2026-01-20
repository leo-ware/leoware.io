"use client";

import { useState } from "react";
import { HiMail } from "react-icons/hi";

type EmailCopyButtonProps = {
	variant?: "icon" | "card" | "button";
	className?: string;
};

type CopiedState = {
	show: boolean;
	x: number;
	y: number;
};

const EMAIL = "leobpware@gmail.com";

export default function EmailCopyButton({
	variant = "icon",
	className = "",
}: EmailCopyButtonProps) {
	const [copied, setCopied] = useState<CopiedState>({
		show: false,
		x: 0,
		y: 0,
	});

	const handleClick = (e: React.MouseEvent) => {
		navigator.clipboard.writeText(EMAIL);
		setCopied({ show: true, x: e.clientX, y: e.clientY });
		setTimeout(() => setCopied((prev) => ({ ...prev, show: false })), 2000);
	};

	const notification = copied.show && (
		<div
			className="fixed text-sm bg-primary-800 text-white px-3 py-2 rounded-md shadow-lg whitespace-nowrap z-50 pointer-events-none"
			style={{ left: copied.x, top: copied.y }}
		>
			Email copied!
		</div>
	);

	if (variant === "icon") {
		return (
			<>
				{notification}
				<button
					onClick={handleClick}
					className={`text-primary-800 hover:text-primary-700 transition-colors p-3 rounded-lg hover:bg-primary-50 ${className}`}
					aria-label="Copy email"
					title="Copy email"
				>
					<HiMail className="w-7 h-7" />
				</button>
			</>
		);
	}

	if (variant === "card") {
		return (
			<>
				{notification}
				<button
					onClick={handleClick}
					className={`flex items-start gap-4 p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-colors group text-left w-full ${className}`}
				>
					<div className="text-primary-700 mt-0.5">
						<HiMail className="w-6 h-6" />
					</div>
					<div>
						<div className="font-semibold text-primary-800 group-hover:text-primary-700">
							Email
						</div>
						<div className="text-sm text-neutral-600">{EMAIL}</div>
						<div className="text-sm text-neutral-500 mt-1">
							Best for project inquiries and professional
							communication.
						</div>
					</div>
				</button>
			</>
		);
	}

	// variant === "button"
	return (
		<>
			{notification}
			<button
				onClick={handleClick}
				className={`inline-flex items-center gap-2 px-4 py-2 border border-primary-700 text-primary-700 text-sm font-semibold rounded-lg hover:bg-primary-50 transition-colors ${className}`}
			>
				<HiMail className="w-4 h-4" />
				Send an Email
			</button>
		</>
	);
}
