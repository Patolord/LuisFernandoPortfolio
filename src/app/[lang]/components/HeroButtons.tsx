"use client";

import { Button } from "@/components/ui/button";

interface HeroButtonsClientProps {
	getFreeConsultationText: string;
	viewTrackRecordText: string;
}

export const HeroButtonsClient = ({
	getFreeConsultationText,
	viewTrackRecordText,
}: HeroButtonsClientProps) => {
	const scrollToSection = (sectionName: string) => {
		const section = document.querySelector(`[data-section="${sectionName}"]`);
		section?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div
			className="flex flex-wrap gap-4 animate-fade-in-up"
			style={{ animationDelay: "1s" }}
		>
			<Button
				size="lg"
				onClick={() => scrollToSection("contact")}
				className="bg-sky-600 hover:bg-sky-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
			>
				{getFreeConsultationText}
			</Button>
			<Button
				size="sm"
				variant="outline"
				onClick={() => scrollToSection("experience")}
				className="border-sky-600 text-sky-400 hover:bg-sky-600 hover:text-white transform hover:scale-105 transition-all duration-300"
			>
				{viewTrackRecordText}
			</Button>
		</div>
	);
};
