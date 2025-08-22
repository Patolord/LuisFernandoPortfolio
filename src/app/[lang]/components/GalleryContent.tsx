import { Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { GalleryCard } from "./GalleryCard";

interface GalleryItem {
	src: string;
	title: string;
	desc: string;
	delay: string;
}

const galleryItems: GalleryItem[] = [
	{
		src: "/images/gol-boeing-hangar.jpg",
		title: "GOL Boeing 737-800",
		desc: "Heavy maintenance operations in professional hangar facility",
		delay: "0.1s",
	},
	{
		src: "/images/night-cockpit.jpg",
		title: "Night Operations",
		desc: "Modern cockpit systems and instrumentation during night operations",
		delay: "0.2s",
	},
	{
		src: "/images/azul-embraer-tarmac.jpg",
		title: "Azul Embraer E195",
		desc: "Redelivery project - SkyOn/Azul lessor representative work",
		delay: "0.3s",
	},
	{
		src: "/images/aircraft-hangar-front.jpg",
		title: "Maintenance Facility",
		desc: "State-of-the-art hangar for comprehensive aircraft inspections",
		delay: "0.4s",
	},
	{
		src: "/images/aircraft-maintenance-side.jpg",
		title: "Technical Maintenance",
		desc: "Professional maintenance environment with specialized equipment",
		delay: "0.5s",
	},
	{
		src: "/images/turboprop-wet-tarmac.jpg",
		title: "Regional Aircraft",
		desc: "Turboprop operations - diverse aircraft type experience",
		delay: "0.6s",
	},
	{
		src: "/images/tarmac-silhouette.jpg",
		title: "Field Operations",
		desc: "Operational aviation work on active airport tarmac",
		delay: "0.7s",
	},
	{
		src: "/images/cockpit-interior.jpg",
		title: "Cockpit Systems",
		desc: "Modern avionics and flight management systems",
		delay: "0.8s",
	},
];

export const GalleryContent = () => {
	return (
		<section className="py-16 px-6" data-section="gallery">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">Aviation Gallery</h2>
					<p className="text-slate-300 text-lg">
						Real aircraft and maintenance environments from my professional
						experience
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{galleryItems.map((item) => (
						<GalleryCard
							key={item.title}
							src={item.src}
							title={item.title}
							desc={item.desc}
							delay={item.delay}
						/>
					))}
				</div>

				<Card className="bg-slate-800 border-slate-700 mt-8 hover:bg-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20">
					<CardContent className="p-8 text-center">
						<Camera className="h-12 w-12 text-sky-400 mx-auto mb-4 animate-pulse" />
						<h3 className="font-bold text-xl mb-4">
							18+ Years of Professional Experience
						</h3>
						<p className="text-slate-300 max-w-3xl mx-auto">
							These images document real projects and aircraft I've worked on
							throughout my career, spanning multiple aircraft types,
							maintenance environments, and operational scenarios across major
							Brazilian airlines and international leasing companies.
						</p>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};
