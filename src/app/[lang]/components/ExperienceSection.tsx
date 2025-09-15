import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
	period: string;
	title: string;
	company: string;
	description: string;
	badges: string[];
	isLeft?: boolean;
}

export const ExperienceSection = async () => {
	const t = await getTranslations("experience");

	const experienceItems: ExperienceItem[] = [
		{
			period: t("jobs.deliveryAuditor.period"),
			title: t("jobs.deliveryAuditor.title"),
			company: t("jobs.deliveryAuditor.company"),
			description: t("jobs.deliveryAuditor.description"),
			badges: ["Embraer E195", "Records Audit", "AD/SB Compliance"],
			isLeft: false,
		},
		{
			period: t("jobs.lessorRep.period"),
			title: t("jobs.lessorRep.title"),
			company: t("jobs.lessorRep.company"),
			description: t("jobs.lessorRep.description"),
			badges: ["Redelivery Inspection", "EMB 195", "Lessor Compliance"],
			isLeft: true,
		},
		{
			period: t("jobs.systemsEngineer.period"),
			title: t("jobs.systemsEngineer.title"),
			company: t("jobs.systemsEngineer.company"),
			description: t("jobs.systemsEngineer.description"),
			badges: ["MEL Management", "ATR-42 Integration", "PMA Approvals"],
			isLeft: false,
		},
		{
			period: t("jobs.engineer.period"),
			title: t("jobs.engineer.title"),
			company: t("jobs.engineer.company"),
			description: t("jobs.engineer.description"),
			badges: ["A320/A330 Fleet", "Heavy Maintenance", "Redelivery Projects"],
			isLeft: true,
		},
	];

	return (
		<section className="py-16 px-6 bg-slate-900/50" data-section="experience">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold mb-12 text-center">{t("title")}</h2>
				<div className="relative">
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-sky-500 to-sky-400 shadow-lg shadow-sky-500/20"></div>

					<div className="space-y-16">
						{experienceItems.map((item) => (
							<div key={`${item.company}-${item.period}`} className="relative">
								<div className="md:hidden text-center mb-4">
									<div className="bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg inline-block">
										{item.period}
									</div>
								</div>
								<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6">
									<div className="bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
										{item.period}
									</div>
								</div>
								<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-16 w-4 h-4 bg-sky-400 rounded-full border-4 border-slate-900 shadow-lg shadow-sky-500/30 z-10"></div>

								<div
									className={`${
										item.isLeft
											? "md:pr-16 md:w-1/2"
											: "md:pl-16 md:w-1/2 md:ml-auto"
									} md:pt-20`}
								>
									<div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:bg-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10">
										<h3 className="text-xl font-bold text-white mb-2">
											{item.title}
										</h3>
										<p className="text-sky-400 font-medium mb-4">
											{item.company}
										</p>
										<p className="text-slate-300 mb-4">{item.description}</p>
										<div className="flex flex-wrap gap-2">
											{item.badges.map((badge) => (
												<Badge
													key={badge}
													variant="outline"
													className="border-slate-600 text-slate-300"
												>
													{badge}
												</Badge>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
