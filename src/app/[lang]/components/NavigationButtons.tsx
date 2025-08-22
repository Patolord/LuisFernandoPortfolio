"use client";

interface NavigationItem {
	label: string;
	section: string;
}

const navigationItems: NavigationItem[] = [
	{ label: "About", section: "about" },
	{ label: "Experience", section: "experience" },
	{ label: "Gallery", section: "gallery" },
	{ label: "Contact", section: "contact" },
];

export const NavigationButtons = () => {
	const scrollToSection = (sectionName: string) => {
		const section = document.querySelector(`[data-section="${sectionName}"]`);
		section?.scrollIntoView({ behavior: "smooth" });
	};

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
