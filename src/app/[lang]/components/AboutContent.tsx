import { Card, CardContent } from "@/components/ui/card";
import { AboutCounters } from "./AboutCounters";

export const AboutContent = () => {
	return (
		<section className="py-16 px-6 bg-slate-900/50" data-section="about">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<p className="text-lg text-slate-300 leading-relaxed">
							With over 18 years of specialized experience in commercial
							aircraft maintenance and technical consultancy, I have established
							myself as a trusted expert in aircraft redelivery projects,
							airworthiness documentation, and fleet transitions across multiple
							aircraft platforms.
						</p>
						<p className="text-lg text-slate-300 leading-relaxed">
							My expertise spans major aircraft manufacturers including Airbus,
							Boeing, Embraer, ATR, and Fokker, with extensive experience in
							lessor inspections, records audits, and physical condition reviews
							for airlines and leasing companies worldwide.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-6">
						<Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10">
							<CardContent className="p-6 text-center">
								<AboutCounters end={18} suffix="+" label="Years Experience" />
							</CardContent>
						</Card>
						<Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10">
							<CardContent className="p-6 text-center">
								<AboutCounters end={50} suffix="+" label="Aircraft Projects" />
							</CardContent>
						</Card>
						<Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10">
							<CardContent className="p-6 text-center">
								<AboutCounters end={8} label="Aircraft Types" />
							</CardContent>
						</Card>
						<Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10">
							<CardContent className="p-6 text-center">
								<AboutCounters end={15} suffix="+" label="Major Airlines" />
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};
