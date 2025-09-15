import { Award, ChevronDown, Clock, Wrench } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ClientCarousel } from "./ClientCarousel";
import { HeroButtons } from "./HeroButtons";
import ParticleBackground from "./ParticleBackground";

export const HeroContent = async () => {
	const t = await getTranslations("hero");
	return (
		<section className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
			<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

			<div className="w-full relative z-10 px-6 lg:px-12 xl:px-16 2xl:px-24">
				<div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 xl:gap-20 items-center max-w-none">
					<div className="space-y-6 animate-fade-in-up">
						<h1 className="text-5xl lg:text-6xl font-bold leading-tight">
							<span
								className="inline-block animate-fade-in-up"
								style={{ animationDelay: "0.2s" }}
							>
								{t("title")}
							</span>
							<span
								className="text-sky-400 block animate-fade-in-up"
								style={{ animationDelay: "0.4s" }}
							>
								{t("subtitle")}
							</span>
						</h1>
						<p
							className="text-xl text-slate-300 leading-relaxed animate-fade-in-up"
							style={{ animationDelay: "0.6s" }}
						>
							{t("description")}
						</p>
						<div
							className="flex flex-wrap gap-4 animate-fade-in-up"
							style={{ animationDelay: "0.8s" }}
						>
							<div className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors">
								<Clock className="h-5 w-5 text-sky-400 animate-pulse" />
								<span>{t("successfulProjects")}</span>
							</div>
							<div className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors">
								<Award className="h-5 w-5 text-sky-400" />
								<span>{t("complianceIssues")}</span>
							</div>
							<div className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
								<Wrench className="h-5 w-5 text-sky-400" />
								<span>{t("aircraftTypes")}</span>
							</div>
						</div>
						<HeroButtons />
					</div>

					<div className="aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
						<Image
							src="/images/cockpit-interior.jpg"
							alt="Professional aircraft cockpit - Luis Fernando's work environment"
							width={600}
							height={600}
							className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
						/>
					</div>
				</div>
			</div>
			<ParticleBackground />

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
