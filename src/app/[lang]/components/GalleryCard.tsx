"use client";

import Image from "next/image";
import { useId } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface GalleryCardProps {
	src: string;
	title: string;
	desc: string;
	delay: string;
}

export const GalleryCard = ({ src, title, desc, delay }: GalleryCardProps) => {
	const cardId = useId();
	const isVisible = useIntersectionObserver();

	return (
		<Card
			id={cardId}
			data-animate
			className={`bg-slate-800 border-slate-700 overflow-hidden hover:bg-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20 cursor-pointer group ${
				isVisible[cardId]
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-10"
			}`}
			style={{ transitionDelay: delay }}
		>
			<div className="aspect-video overflow-hidden">
				<Image
					src={src || "/placeholder.svg"}
					alt={title}
					width={400}
					height={225}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
				/>
			</div>
			<CardContent className="p-4">
				<h3 className="font-bold text-sky-400 mb-1 group-hover:text-sky-300 transition-colors">
					{title}
				</h3>
				<p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors">
					{desc}
				</p>
			</CardContent>
		</Card>
	);
};
