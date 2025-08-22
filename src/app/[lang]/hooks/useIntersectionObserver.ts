"use client";

import { useEffect, useState } from "react";

export function useIntersectionObserver() {
	const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
					}
				});
			},
			{ threshold: 0.1 },
		);

		const sections = document.querySelectorAll("[data-animate]");
		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	return isVisible;
}
