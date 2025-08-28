import { Award, FileText, Plane, Wrench } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";

const aircraftTypes = [
	"Airbus A320 Family",
	"Airbus A330/A340",
	"Boeing 737/767/777",
	"Embraer E190/E195",
	"ATR-42/72",
	"Fokker F-100",
];

const engineTypes = ["CFM56", "LEAP-1A", "V2500"];

export const TechnicalExpertiseSection = async () => {
	const t = await getTranslations("expertise");

	const specializations = [
		{
			icon: FileText,
			title: t("specializations.redelivery.title"),
			description: t("specializations.redelivery.description"),
		},
		{
			icon: Award,
			title: t("specializations.certifications.title"),
			description: t("specializations.certifications.description"),
		},
		{
			icon: Wrench,
			title: t("specializations.systems.title"),
			description: t("specializations.systems.description"),
		},
	];

	return (
		<section className="py-16 px-6 relative" data-section="certifications">
			<div className="max-w-6xl mx-auto relative z-10">
				<h2 className="text-3xl font-bold mb-12 text-center">{t("title")}</h2>

				{/* Aircraft Types */}
				<div className="mb-12">
					<h3 className="text-xl font-bold mb-6 text-sky-400">
						{t("aircraftPlatforms")}
					</h3>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
						{aircraftTypes.map((aircraft) => (
							<Card
								key={aircraft}
								className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10"
							>
								<CardContent className="p-4 text-center">
									<Plane className="h-6 w-6 text-sky-400 mx-auto mb-2" />
									<p className="text-sm font-medium">{aircraft}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* Engine Types */}
				<div className="mb-12">
					<h3 className="text-xl font-bold mb-6 text-sky-400">
						{t("engineExperience")}
					</h3>
					<div className="grid md:grid-cols-3 gap-4">
						{engineTypes.map((engine) => (
							<Card
								key={engine}
								className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10"
							>
								<CardContent className="p-4 text-center">
									<Wrench className="h-6 w-6 text-sky-400 mx-auto mb-2" />
									<p className="text-sm font-medium">{engine}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* Specializations */}
				<div>
					<h3 className="text-xl font-bold mb-6 text-sky-400">
						{t("coreSpecializations")}
					</h3>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{specializations.map((spec) => {
							const IconComponent = spec.icon;
							return (
								<Card
									key={spec.title}
									className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10"
								>
									<CardContent className="p-6">
										<IconComponent className="h-8 w-8 text-sky-400 mb-4" />
										<h4 className="font-bold mb-2">{spec.title}</h4>
										<p className="text-slate-300 text-sm">{spec.description}</p>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
