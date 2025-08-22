import StructuredData from "@/components/StructuredData";
import { AboutContent } from "./components/AboutContent";
import { ContactContent } from "./components/ContactContent";
import { ExperienceSection } from "./components/ExperienceSection";
import { FloatingShapes } from "./components/FloatingShapes";
import { Footer } from "./components/Footer";
import { GalleryContent } from "./components/GalleryContent";
import { HeroContent } from "./components/HeroContent";
import { NavigationBar } from "./components/NavigationBar";
import { TechnicalExpertiseSection } from "./components/TechnicalExpertiseSection";

export default async function AviatorPortfolio({
	params,
}: {
	params: Promise<{
		lang: "en" | "pt-BR";
	}>;
}) {
	const { lang } = await params;

	return (
		<>
			<StructuredData lang={lang} />
			<div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
				<NavigationBar />
				<FloatingShapes />
				<HeroContent />
				<AboutContent />
				<GalleryContent />
				<ExperienceSection />
				<TechnicalExpertiseSection />
				<ContactContent />
				<Footer />
			</div>
		</>
	);
}
