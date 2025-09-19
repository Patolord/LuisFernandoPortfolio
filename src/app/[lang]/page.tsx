import { getTranslations, setRequestLocale } from "next-intl/server";
import StructuredData from "@/components/StructuredData";
import { ContactContent } from "./components/ContactContent";
import { Footer } from "./components/Footer";
import { GalleryContent } from "./components/GalleryContent";
import { HeroContent } from "./components/HeroContent";
import { MissionContent } from "./components/MissionContent";
import { NavigationBar } from "./components/NavigationBar";
import { TechnicalExpertiseSection } from "./components/TechnicalExpertiseSection";

export function generateStaticParams() {
	return [{ lang: "en" }, { lang: "pt-BR" }];
}

export default async function AviatorPortfolio({
	params,
}: {
	params: Promise<{
		lang: "en" | "pt-BR";
	}>;
}) {
	const { lang } = await params;

	// Enable static rendering
	setRequestLocale(lang);

	// Get navigation translations
	const t = await getTranslations("nav");
	const navigationItems = [
		{ label: t("mission"), section: "mission" },
		{ label: t("experience"), section: "experience" },
		{ label: t("expertise"), section: "expertise" },
		{ label: t("contact"), section: "contact" },
	];

	return (
		<>
			<StructuredData lang={lang} />
			<div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
				<NavigationBar currentLocale={lang} navigationItems={navigationItems} />
				<HeroContent />
				<MissionContent />
				<GalleryContent />
				<TechnicalExpertiseSection />
				<ContactContent />
				<Footer />
			</div>
		</>
	);
}
