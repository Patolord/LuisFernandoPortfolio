import { CheckCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";

export const MissionContent = async () => {
	const t = await getTranslations("mission");

	return (
		<section className="py-16 px-6 bg-slate-900/50" data-section="mission">
			<div className="max-w-full mx-auto">
				<h2 className="text-3xl font-bold mb-8 text-center">{t("title")}</h2>
				<div className="max-w-6xl mx-auto mb-12">
					<p className="text-lg text-slate-300 leading-relaxed text-center">
						{t("description")}
					</p>
				</div>
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
					{[0, 1, 2, 3].map((index) => (
						<Card
							key={index}
							className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10"
						>
							<CardContent className="p-6 flex items-start space-x-3">
								<CheckCircle className="h-6 w-6 text-sky-400 mt-1 flex-shrink-0" />
								<p className="text-slate-300 leading-relaxed">
									{t(`items.${index}`)}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
