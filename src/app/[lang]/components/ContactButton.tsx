"use client";

import { useId } from "react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const ContactButton = () => {
	const buttonId = useId();
	const isVisible = useIntersectionObserver();

	return (
		<div
			id={buttonId}
			data-animate
			className={`transition-all duration-1000 ${
				isVisible[buttonId]
					? "opacity-100 translate-y-0 scale-100"
					: "opacity-0 translate-y-10 scale-95"
			}`}
		>
			<Button
				size="lg"
				className="bg-sky-600 hover:bg-sky-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
			>
				Start Your Project Today
			</Button>
		</div>
	);
};
