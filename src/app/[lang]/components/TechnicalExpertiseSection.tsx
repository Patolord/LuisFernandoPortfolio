import { ArrowDown, Award, FileText, Plane, Wrench } from "lucide-react";
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

const engineTypes = ["CFM56", "LEAP-1A", "V2500", "CF6"];

export const TechnicalExpertiseSection = async () => {
	const t = await getTranslations("expertise");
	const gradientId = "technical-expertise-gradient";
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
		{
			icon: Wrench,
			title: t("specializations.maintenance.title"),
			description: t("specializations.maintenance.description"),
		},
	];

	return (
		<section
			className="py-16 px-2 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
			data-section="expertise"
		>
			<div className="max-w-7xl mx-auto relative z-10">
				<h2 className="text-3xl font-bold mb-16 text-center">{t("title")}</h2>

				{/* Flow Container */}
				<div className="relative">
					{/* Aircraft Platforms Section */}
					<div className="mb-16 relative">
						<div className="text-center mb-8">
							<h3 className="text-2xl font-bold mb-2 text-sky-400">
								{t("aircraftPlatforms")}
							</h3>
							<div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full"></div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
							{aircraftTypes.map((aircraft) => (
								<Card
									key={aircraft}
									className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:bg-slate-700/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20 group relative overflow-hidden"
								>
									<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									<CardContent className="p-6 text-center relative z-10">
										<Plane className="h-8 w-8 text-sky-400 mx-auto mb-3 group-hover:text-sky-300 transition-colors" />
										<p className="font-medium text-sm">{aircraft}</p>
									</CardContent>
								</Card>
							))}
						</div>

						{/* Connection Arrow */}
						<div className="flex justify-center mt-12 mb-8">
							<div className="flex items-center space-x-2 text-sky-400">
								<div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-sky-400"></div>
								<ArrowDown className="h-6 w-6 animate-pulse" />
								<div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-sky-400"></div>
							</div>
						</div>
					</div>

					{/* Engine Experience Section */}
					<div className="mb-16 relative">
						<div className="text-center mb-8">
							<h3 className="text-2xl font-bold mb-2 text-sky-400">
								{t("engineExperience")}
							</h3>
							<div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full"></div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
							{engineTypes.map((engine) => (
								<Card
									key={engine}
									className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:bg-slate-700/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20 group relative overflow-hidden"
								>
									<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									<CardContent className="p-8 text-center relative z-10">
										<Wrench className="h-10 w-10 text-sky-400 mx-auto mb-4 group-hover:text-sky-300 transition-colors" />
										<p className="font-medium text-lg">{engine}</p>
									</CardContent>
								</Card>
							))}
						</div>

						{/* Connection Arrow */}
						<div className="flex justify-center mt-12 mb-8">
							<div className="flex items-center space-x-2 text-sky-400">
								<div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-sky-400"></div>
								<ArrowDown className="h-6 w-6 animate-pulse" />
								<div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-sky-400"></div>
							</div>
						</div>
					</div>

					{/* Core Solutions Section */}
					<div className="relative">
						<div className="text-center mb-8">
							<h3 className="text-2xl font-bold mb-2 text-sky-400">
								{t("coreSpecializations")}
							</h3>
							<div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full"></div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
							{specializations.map((spec) => {
								const IconComponent = spec.icon;
								return (
									<Card
										key={spec.title}
										className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:bg-slate-700/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20 group relative overflow-hidden"
									>
										<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
										<CardContent className="p-8 text-center relative z-10">
											<div className="bg-sky-500/10 rounded-full p-4 w-fit mx-auto mb-6 group-hover:bg-sky-500/20 transition-colors">
												<IconComponent className="h-8 w-8 text-sky-400 group-hover:text-sky-300 transition-colors" />
											</div>
											<h4 className="font-bold mb-3 text-lg">{spec.title}</h4>
											<p className="text-slate-300 text-sm leading-relaxed">
												{spec.description}
											</p>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>

					{/* Background Flow Lines */}
					<div className="absolute inset-0 pointer-events-none opacity-20">
						<svg
							className="w-full h-full"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Background flow lines"
						>
							<defs>
								<linearGradient
									id={gradientId}
									x1="0%"
									y1="0%"
									x2="100%"
									y2="100%"
								>
									<stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
									<stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
									<stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
								</linearGradient>
							</defs>
							<path
								d="M50 100 Q 300 200 650 300 T 1200 500"
								stroke={`url(#${gradientId})`}
								strokeWidth="2"
								fill="none"
								className="animate-pulse"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};
