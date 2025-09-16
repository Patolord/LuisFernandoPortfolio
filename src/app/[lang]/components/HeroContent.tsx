import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { ClientCarousel } from "./ClientCarousel";

export const HeroContent = async () => {
	return (
		<section className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
			{/* Background Image */}
			<div className="absolute inset-0">
				<Image
					src="/images/hero.jpeg"
					alt="Professional aviation environment"
					fill
					className="object-cover"
					priority
				/>
			</div>

			{/* Client Carousel */}
			<div className="absolute bottom-0 left-0 right-0">
				<ClientCarousel />
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
				<ChevronDown className="h-6 w-6 text-sky-400" />
			</div>
		</section>
	);
};
