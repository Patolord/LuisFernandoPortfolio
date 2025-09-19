import { Camera } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { InlineGalleryCarousel } from "./InlineGalleryCarousel";

interface GalleryItem {
	src: string;
	title: string;
	desc: string;
	delay: string;
}

export const GalleryContent = async () => {
	const t = await getTranslations("gallery");

	const galleryItems: GalleryItem[] = [
		{
			src: "/images/gol-boeing-hangar.jpg",
			title: t("items.golBoeing.title"),
			desc: t("items.golBoeing.description"),
			delay: "0.1s",
		},
		{
			src: "/images/night-cockpit.jpg",
			title: t("items.nightOperations.title"),
			desc: t("items.nightOperations.description"),
			delay: "0.2s",
		},
		{
			src: "/images/azul-embraer-tarmac.jpg",
			title: t("items.azulEmbraer.title"),
			desc: t("items.azulEmbraer.description"),
			delay: "0.3s",
		},
		{
			src: "/images/aircraft-hangar-front.jpg",
			title: t("items.maintenanceFacility.title"),
			desc: t("items.maintenanceFacility.description"),
			delay: "0.4s",
		},
		{
			src: "/images/aircraft-maintenance-side.jpg",
			title: t("items.technicalMaintenance.title"),
			desc: t("items.technicalMaintenance.description"),
			delay: "0.5s",
		},
		{
			src: "/images/turboprop-wet-tarmac.jpg",
			title: t("items.regionalAircraft.title"),
			desc: t("items.regionalAircraft.description"),
			delay: "0.6s",
		},
		{
			src: "/images/tarmac-silhouette.jpg",
			title: t("items.fieldOperations.title"),
			desc: t("items.fieldOperations.description"),
			delay: "0.7s",
		},
	];

	return (
		<section className="py-16 px-6" data-section="gallery">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
					<p className="text-slate-300 text-lg">{t("description")}</p>
				</div>
				<InlineGalleryCarousel items={galleryItems} />

				<Card className=" bg-slate-800 border-slate-700 mt-8 hover:bg-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20">
					<CardContent className="p-8 text-center">
						<Camera className="h-12 w-12 text-sky-400 mx-auto mb-4 animate-pulse" />
						<h3 className="font-bold text-xl mb-4">
							{t("experienceCard.title")}
						</h3>
						<p className="text-slate-300 max-w-3xl mx-auto">
							{t("experienceCard.description")}
						</p>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};
