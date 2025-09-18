"use client";

import type { Client } from "./ClientCarouselContent";

interface ClientCarouselClientProps {
	clients: Client[];
	trustedByText: string;
}

export const ClientCarouselClient = ({
	clients,
	trustedByText,
}: ClientCarouselClientProps) => {
	return (
		<div className="w-full py-6 bg-slate-900/70 backdrop-blur-sm border-t border-slate-800">
			<div className="w-full px-6 lg:px-12 xl:px-16 2xl:px-24">
				<div className="text-center mb-6">
					<p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
						{trustedByText}
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
