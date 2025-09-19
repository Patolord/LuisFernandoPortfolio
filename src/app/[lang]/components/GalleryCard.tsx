"use client";

import { Expand, Eye } from "lucide-react";
import Image from "next/image";
import { useId, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface GalleryCardProps {
	src: string;
	title: string;
	desc: string;
	delay: string;
	onClick: () => void;
}

export const GalleryCard = ({
	src,
	title,
	desc,
	delay,
	onClick,
}: GalleryCardProps) => {
	const cardId = useId();
	const isVisible = useIntersectionObserver();
	const [isClicked, setIsClicked] = useState(false);

	const handleCardClick = () => {
		setIsClicked(true);
		onClick();
		// Reset click state after animation
		setTimeout(() => setIsClicked(false), 150);
	};

	return (
		<Card
			id={cardId}
			data-animate
			className={`pt-0 pb-0 bg-slate-800 border-slate-700 overflow-hidden hover:bg-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20 cursor-pointer group ${
				isVisible[cardId]
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-10"
			} ${isClicked ? "scale-95" : ""}`}
			style={{ transitionDelay: delay }}
			onClick={handleCardClick}
		>
			<div className="aspect-video overflow-hidden relative">
				<Image
					src={src || "/placeholder.svg"}
					alt={title}
					width={400}
					height={225}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
				/>
				<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
					<Eye className="h-8 w-8 text-white drop-shadow-lg" />
				</div>
			</div>
			<CardContent className="p-4">
				<div className="flex items-start justify-between">
					<div className="flex-1">
						<h3 className="font-bold text-sky-400 mb-1 group-hover:text-sky-300 transition-colors">
							{title}
						</h3>
						<p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors">
							{desc}
						</p>
					</div>
					<Expand className="h-4 w-4 text-slate-400 group-hover:text-sky-400 transition-colors ml-2 flex-shrink-0" />
				</div>
			</CardContent>
		</Card>
	);
};
