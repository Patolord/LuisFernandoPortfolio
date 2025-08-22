"use client";

import { useTranslations } from "next-intl";

export const NavigationButtons = () => {
	const t = useTranslations("nav");
	const scrollToSection = (sectionName: string) => {
		const section = document.querySelector(`[data-section="${sectionName}"]`);
		section?.scrollIntoView({ behavior: "smooth" });
	};

	const navigationItems = [
		{ label: t("about"), section: "about" },
		{ label: t("experience"), section: "experience" },
		{ label: t("expertise"), section: "expertise" },
		{ label: t("contact"), section: "contact" },
	];

	return (
		<div className="hidden md:flex items-center gap-6">
			{navigationItems.map((item) => (
				<button
					key={item.section}
					type="button"
					onClick={() => scrollToSection(item.section)}
					className="text-slate-300 hover:text-sky-400 transition-colors"
				>
					{item.label}
				</button>
			))}
		</div>
	);
};
