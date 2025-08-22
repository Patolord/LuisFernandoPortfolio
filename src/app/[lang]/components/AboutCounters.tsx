"use client";

import { useId } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { AnimatedCounter } from "./AnimatedCounter";

interface AboutCountersProps {
	end: number;
	suffix?: string;
	label: string;
}

export const AboutCounters = ({ end, suffix, label }: AboutCountersProps) => {
	const counterId = useId();
	const isVisible = useIntersectionObserver();

	return (
		<div
			id={counterId}
			data-animate
			className={`transition-all duration-1000 ${
				isVisible[counterId] ? "opacity-100 scale-100" : "opacity-0 scale-95"
			}`}
		>
			<div className="text-3xl font-bold text-sky-400 mb-2">
				<AnimatedCounter end={end} suffix={suffix} />
			</div>
			<div className="text-slate-300">{label}</div>
		</div>
	);
};
