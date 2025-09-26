import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ClientCarouselContent } from "./ClientCarouselContent";
import { HeroTransition } from "./HeroTransition";

export const HeroContent = async () => {
	const t = await getTranslations("hero");
	const contactT = await getTranslations("contact");

	const whatsappUrl = `https://wa.me/5512981559280?text=${encodeURIComponent(contactT("whatsappMessage"))}`;

	return (
		<section className="pt-20 pb-16 relative overflow-hidden min-h-screen">
			<HeroTransition
				title={t("title")}
				subtitle={t("subtitle")}
				description={t("description")}
				complianceIssues={t("complianceIssues")}
				successfulProjects={t("successfulProjects")}
				aircraftTypes={t("aircraftTypes")}
				getFreeConsultation={t("getFreeConsultation")}
				viewTrackRecord={t("viewTrackRecord")}
				whatsappUrl={whatsappUrl}
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
