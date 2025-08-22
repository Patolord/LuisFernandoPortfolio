"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export const HeroButtons = () => {
	const t = useTranslations("hero");

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
				{t("getFreeConsultation")}
			</Button>
			<Button
				size="lg"
				variant="outline"
				onClick={() => scrollToSection("experience")}
				className="border-sky-600 text-sky-400 hover:bg-sky-600 hover:text-white transform hover:scale-105 transition-all duration-300"
			>
				{t("viewTrackRecord")}
			</Button>
		</div>
	);
};
