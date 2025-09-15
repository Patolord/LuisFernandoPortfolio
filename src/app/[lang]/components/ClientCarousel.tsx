"use client";

import { useTranslations } from "next-intl";

const clients = [
	{
		name: "JetBlue",
		logo: "/images/clients/jetblue-logo.png",
		alt: "JetBlue Airways",
	},
	{
		name: "Eirtech",
		logo: "/images/clients/eirtech-logo.png",
		alt: "Eirtech Aviation Services",
	},
	{
		name: "SkyOn",
		logo: "/images/clients/skyon-logo.png",
		alt: "SkyOn Aviation Leasing",
	},
	{
		name: "Azul",
		logo: "/images/clients/azul-logo.png",
		alt: "Azul Brazilian Airlines",
	},
	{
		name: "North Compass",
		logo: "/images/clients/north-compass-logo.png",
		alt: "North Compass Aviation",
	},
	{
		name: "Avelo Airlines",
		logo: "/images/clients/avelo-logo.png",
		alt: "Avelo Airlines",
	},
	{
		name: "PCA Airworthiness",
		logo: "/images/clients/pca-logo.png",
		alt: "PCA Airworthiness",
	},
	{
		name: "Avianca Brasil",
		logo: "/images/clients/avianca-logo.png",
		alt: "Avianca Brasil",
	},
	{
		name: "TAM Airlines",
		logo: "/images/clients/tam-logo.png",
		alt: "TAM Airlines",
	},
	{
		name: "GECAS",
		logo: "/images/clients/gecas-logo.png",
		alt: "GECAS Leasing",
	},
];

export const ClientCarousel = () => {
	const t = useTranslations("clients");

	return (
		<div className="w-full py-6 bg-slate-900/70 backdrop-blur-sm border-t border-slate-800">
			<div className="w-full px-6 lg:px-12 xl:px-16 2xl:px-24">
				<div className="text-center mb-6">
					<p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
						{t("trustedBy")}
					</p>
				</div>

				{/* Carousel Container */}
				<div className="relative overflow-hidden">
					{/* Gradient Overlays */}
					<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900/50 to-transparent z-10"></div>
					<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900/50 to-transparent z-10"></div>

					{/* Scrolling Container */}
					<div className="flex animate-scroll-left">
						{/* First set of logos */}
						<div className="flex items-center justify-center min-w-max">
							{clients.map((client) => (
								<div
									key={`first-${client.name}`}
									className="flex items-center justify-center mx-6 h-12 w-28 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
								>
									<div className="bg-white/10 rounded-lg p-2 h-full w-full flex items-center justify-center backdrop-blur-sm border border-slate-700/50">
										<span className="text-slate-300 font-medium text-xs text-center">
											{client.name}
										</span>
									</div>
								</div>
							))}
						</div>

						{/* Duplicate set for seamless loop */}
						<div className="flex items-center justify-center min-w-max">
							{clients.map((client) => (
								<div
									key={`second-${client.name}`}
									className="flex items-center justify-center mx-6 h-12 w-28 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
								>
									<div className="bg-white/10 rounded-lg p-2 h-full w-full flex items-center justify-center backdrop-blur-sm border border-slate-700/50">
										<span className="text-slate-300 font-medium text-xs text-center">
											{client.name}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
