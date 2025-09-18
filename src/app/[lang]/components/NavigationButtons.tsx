"use client";

interface NavigationItem {
	label: string;
	section: string;
}

interface NavigationButtonsClientProps {
	items: NavigationItem[];
}

export const NavigationButtonsClient = ({
	items,
}: NavigationButtonsClientProps) => {
	const scrollToSection = (sectionName: string) => {
		const section = document.querySelector(`[data-section="${sectionName}"]`);
		section?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="hidden md:flex items-center gap-6">
			{items.map((item) => (
				<button
					key={item.section}
					type="button"
					onClick={() => scrollToSection(item.section)}
					className="text-gray-700 hover:text-sky-600 transition-colors font-medium"
				>
					{item.label}
				</button>
			))}
		</div>
	);
};
