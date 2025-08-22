import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { AboutCounters } from "./AboutCounters";

export const AboutContent = async () => {
	const t = await getTranslations("about");

	return (
		<section className="py-16 px-6 bg-slate-900/50" data-section="about">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold mb-8 text-center">{t("title")}</h2>
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<p className="text-lg text-slate-300 leading-relaxed">
							{t("description1")}
						</p>
						<p className="text-lg text-slate-300 leading-relaxed">
							{t("description2")}
						</p>
					</div>
					<div className="grid grid-cols-2 gap-6">
						<Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10">
							<CardContent className="p-6 text-center">
								<AboutCounters
									end={18}
									suffix="+"
									label={t("stats.yearsExperience")}
								/>
							</CardContent>
						</Card>
						<Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10">
							<CardContent className="p-6 text-center">
								<AboutCounters
									end={50}
									suffix="+"
									label={t("stats.aircraftProjects")}
								/>
							</CardContent>
						</Card>
						<Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10">
							<CardContent className="p-6 text-center">
								<AboutCounters end={8} label={t("stats.aircraftTypes")} />
							</CardContent>
						</Card>
						<Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10">
							<CardContent className="p-6 text-center">
								<AboutCounters
									end={15}
									suffix="+"
									label={t("stats.majorAirlines")}
								/>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};
