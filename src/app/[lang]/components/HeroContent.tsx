import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { ClientCarouselContent } from "./ClientCarouselContent";
import { HeroTransition } from "./HeroTransition";

export const HeroContent = async () => {
	const t = await getTranslations("hero");
	const tContact = await getTranslations("contact");

	const whatsappUrl = `https://wa.me/5512981559280?text=${encodeURIComponent(tContact("whatsappMessage"))}`;

	const backgroundImage = (
		<picture>
			<source srcSet="/images/hero.webp" type="image/webp" />
			<img
				src="/images/aircraft-landing-hero.jpeg"
				alt="Professional aviation environment"
				className="absolute inset-0 w-full h-full object-cover"
			/>
		</picture>
	);

	const heroContent = (
		<>
			{/* Title at the top */}
			<div className="text-center text-white pt-16 px-6">
				<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
					{t("title")}
					<br />
					<span className="text-transparent bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text">
						{t("subtitle")}
					</span>
				</h1>
			</div>

			{/* Description and content in the middle */}
			<div className="text-center text-white px-6 flex-1 flex flex-col justify-center mt-56">
				<p className="text-base md:text-lg lg:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200">
					{t("description")}
				</p>

				{/* Statistics */}
				<div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
					<div className="flex items-center gap-2 text-sky-400">
						<div className="w-3 h-3 bg-sky-400 rounded-full"></div>
						<span className="text-sm md:text-base font-medium">
							{t("complianceIssues")}
						</span>
					</div>
					<div className="flex items-center gap-2 text-sky-400">
						<div className="w-3 h-3 bg-sky-400 rounded-full"></div>
						<span className="text-sm md:text-base font-medium">
							{t("successfulProjects")}
						</span>
					</div>
					<div className="flex items-center gap-2 text-sky-400">
						<div className="w-3 h-3 bg-sky-400 rounded-full"></div>
						<span className="text-sm md:text-base font-medium">
							{t("aircraftTypes")}
						</span>
					</div>
				</div>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
						<Button
							size="lg"
							className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
						>
							{t("getFreeConsultation")}
						</Button>
					</a>
					<a href="#expertise">
						<Button
							variant="outline"
							size="lg"
							className="px-8 py-4 border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
						>
							{t("viewTrackRecord")}
						</Button>
					</a>
				</div>
			</div>
		</>
	);

	return (
		<section className="pt-20 pb-16 relative overflow-hidden min-h-screen">
			<HeroTransition
				backgroundImage={backgroundImage}
				heroContent={heroContent}
			/>

			{/* Client Carousel */}
			<div className="absolute bottom-0 left-0 right-0">
				<ClientCarouselContent />
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
				<ChevronDown className="h-6 w-6 text-sky-400" />
			</div>
		</section>
	);
};
