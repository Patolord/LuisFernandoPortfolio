"use client";

import { useEffect, useState } from "react";

interface AnimatedCounterProps {
	end: number;
	duration?: number;
	suffix?: string;
}

export const AnimatedCounter = ({
	end,
	duration = 2000,
	suffix = "",
}: AnimatedCounterProps) => {
	const [count, setCount] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);

	useEffect(() => {
		if (!hasStarted) return;

		const startTime = Date.now();
		const timer = setInterval(() => {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1);
			setCount(Math.floor(progress * end));

			if (progress === 1) clearInterval(timer);
		}, 16);

		return () => clearInterval(timer);
	}, [hasStarted, end, duration]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasStarted) {
					setHasStarted(true);
				}
			},
			{ threshold: 0.5 },
		);

		const element = document.getElementById(`counter-${end}`);
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, [hasStarted, end]);

	return (
		<span id={`counter-${end}`}>
			{count}
			{suffix}
		</span>
	);
};
