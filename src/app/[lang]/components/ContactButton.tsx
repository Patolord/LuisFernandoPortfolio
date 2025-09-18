"use client";

import { useId } from "react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface ContactButtonClientProps {
	downloadResumeText: string;
}

export const ContactButtonClient = ({
	downloadResumeText,
}: ContactButtonClientProps) => {
	const buttonId = useId();
	const isVisible = useIntersectionObserver();

	const handleDownloadResume = () => {
		// Create a link element to trigger the download
		const link = document.createElement("a");
		link.href = "/resume.pdf"; // Path to your PDF file
		link.download = "LuisFernando_Resume.pdf"; // Name for the downloaded file
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div
			id={buttonId}
			data-animate
			className={`transition-all duration-1000 ${
				isVisible[buttonId]
					? "opacity-100 translate-y-0 scale-100"
					: "opacity-0 translate-y-10 scale-95"
			}`}
		>
			<Button
				size="lg"
				onClick={handleDownloadResume}
				className="bg-sky-600 hover:bg-sky-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
			>
				{downloadResumeText}
			</Button>
		</div>
	);
};
