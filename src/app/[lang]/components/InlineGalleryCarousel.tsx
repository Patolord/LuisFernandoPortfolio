"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface GalleryItem {
	src: string;
	title: string;
	desc: string;
}

interface InlineGalleryCarouselProps {
	items: GalleryItem[];
}

export const InlineGalleryCarousel = ({
	items,
}: InlineGalleryCarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);

	// Auto-play functionality
	useEffect(() => {
		if (!isPlaying || items.length <= 1) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
		}, 4000); // Change image every 4 seconds

		return () => clearInterval(interval);
	}, [isPlaying, items.length]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "ArrowLeft") {
				setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
			} else if (event.key === "ArrowRight") {
				setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [items.length]);

	if (!items.length) return null;

	const currentItem = items[currentIndex];

	return (
		<section className="w-full">
			{/* Main carousel area */}
			<section
				className="relative bg-slate-900 rounded-2xl overflow-hidden"
				aria-label="Galeria de imagens"
				onMouseEnter={() => setIsPlaying(false)}
				onMouseLeave={() => setIsPlaying(true)}
			>
				<section className="flex flex-col lg:flex-row min-h-[400px] lg:min-h-[500px]">
					{/* Image section */}
					<section className="flex-1 relative">
						<Image
							src={currentItem.src}
							alt={currentItem.title}
							fill
							className="object-cover"
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
						/>

						{/* Navigation overlays */}
						<button
							type="button"
							className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all duration-200 group"
							onClick={() =>
								setCurrentIndex((prev) =>
									prev > 0 ? prev - 1 : items.length - 1,
								)
							}
							aria-label="Imagem anterior"
						>
							<svg
								role="img"
								aria-label="Seta para direita"
								className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>

						<button
							type="button"
							className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all duration-200 group"
							onClick={() =>
								setCurrentIndex((prev) =>
									prev < items.length - 1 ? prev + 1 : 0,
								)
							}
							aria-label="Próxima imagem"
						>
							<svg
								role="img"
								aria-label="Seta para direita"
								className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
					</section>

					{/* Content section */}
					<section className="lg:w-80 flex flex-col justify-center p-6 lg:p-8 bg-slate-800">
						<h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
							{currentItem.title}
						</h3>
						<p className="text-slate-300 text-base lg:text-lg leading-relaxed">
							{currentItem.desc}
						</p>

						{/* Image counter */}
						<section className="mt-6 text-sm text-slate-400">
							{currentIndex + 1} de {items.length}
						</section>
					</section>
				</section>
			</section>

			{/* Dots indicator */}
			<section className="flex justify-center mt-6 space-x-2">
				{items.map((item, index) => (
					<button
						key={`dot-${item.src}-${index}`}
						type="button"
						onClick={() => setCurrentIndex(index)}
						className={`w-3 h-3 rounded-full transition-all duration-300 ${
							index === currentIndex
								? "bg-sky-400 scale-125"
								: "bg-slate-500 hover:bg-slate-400"
						}`}
						aria-label={`Ir para imagem ${index + 1}`}
					/>
				))}
			</section>
		</section>
	);
};
