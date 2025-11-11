"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface HeroTransitionProps {
	title: string;
	subtitle: string;
	description: string;
	complianceIssues: string;
	successfulProjects: string;
	aircraftTypes: string;
	getFreeConsultation: string;
	viewTrackRecord: string;
	whatsappUrl: string;
}

export const HeroTransition = ({
	title,
	subtitle,
	description,
	complianceIssues,
	successfulProjects,
	aircraftTypes,
	getFreeConsultation,
	viewTrackRecord,
	whatsappUrl,
}: HeroTransitionProps) => {
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowContent(true);
		}, 120); // 0.2 seconds

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{/* Background image with transition */}
			<div className="absolute inset-0 filter brightness-135">
				<Image
					src="/images/hero.webp"
					alt="Professional aviation environment"
					fill
					className="object-cover"
					priority
					sizes="100vw"
				/>
			</div>

			{/* Hero content with fade-in animation */}
			<div
				className={`pt-6 w-full h-full relative z-10 flex flex-col justify-between transition-all duration-1500 ease-out ${
					showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
				}`}
			>
				{/* Title at the top */}
				<div className="text-center text-white pt-12 md:pt-12 sm:pt-4 px-6">
					<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
						{title}
						<br />
						<span className="text-transparent bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text">
							{subtitle}
						</span>
					</h1>
				</div>
				l{/* Description and content in the middle */}
				<div className="text-center text-white px-6 flex-1 flex flex-col justify-center md:mt-56 sm:mt-24">
					<p className="text-base md:text-lg lg:text-xl my-10 md:my-8 max-w-4xl mx-auto leading-relaxed text-gray-200">
						{description}
					</p>

					{/* Statistics */}
					<div className="flex flex-col sm:flex-row justify-center items-center font-bold gap-8 mb-8 md:mb-6">
						<div className="flex items-center gap-2 rounded-full p-2 text-sky-400">
							<div className="w-3 h-3 bg-sky-400 rounded-full"></div>
							<span className="text-sm md:text-base font-medium">
								{complianceIssues}
							</span>
						</div>
						<div className="flex items-center gap-2 text-sky-400">
							<div className="w-3 h-3 bg-sky-400 rounded-full"></div>
							<span className="text-sm md:text-base font-medium">
								{successfulProjects}
							</span>
						</div>
						<div className="flex items-center gap-2 text-sky-400">
							<div className="w-3 h-3 bg-sky-400 rounded-full"></div>
							<span className="text-sm md:text-base font-medium">
								{aircraftTypes}
							</span>
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							onClick={() =>
								window.open(whatsappUrl, "_blank", "noopener,noreferrer")
							}
							className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
						>
							{getFreeConsultation}
						</Button>
						<Button
							variant="ghost"
							size="lg"
							onClick={() => {
								const section = document.querySelector(
									'[data-section="expertise"]',
								);
								section?.scrollIntoView({ behavior: "smooth" });
							}}
							className="px-8 py-4 border-2 border-sky-400 text-sky-400 hover:scale-105 font-semibold rounded-lg transition-all duration-300 hover:bg-transparent"
						>
							{viewTrackRecord}
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};
