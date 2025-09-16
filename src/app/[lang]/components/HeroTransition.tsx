"use client";

import { useEffect, useState } from "react";

interface HeroTransitionProps {
	backgroundImage: React.ReactNode;
	heroContent: React.ReactNode;
}

export const HeroTransition = ({
	backgroundImage,
	heroContent,
}: HeroTransitionProps) => {
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowContent(true);
		}, 800); // 0.8 seconds

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{/* Background image with transition */}
			<div
				className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
					showContent ? "opacity-30" : "opacity-100"
				}`}
			>
				{backgroundImage}
			</div>

			{/* Hero content with fade-in animation */}
			<div
				className={`w-full h-full relative z-10 flex flex-col justify-between transition-all duration-1500 ease-out ${
					showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
				}`}
			>
				{heroContent}
			</div>
		</>
	);
};
