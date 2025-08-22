"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamic import with loading state
const ParticleBackground = dynamic(
	() =>
		import("./ParticleBackground").then((mod) => ({
			default: mod.ParticleBackground,
		})),
	{
		ssr: false,
		loading: () => null, // No loading spinner - just invisible until loaded
	},
);

export const ParticleLoader = () => {
	const [shouldLoad, setShouldLoad] = useState(false);

	useEffect(() => {
		// Load particles after a short delay to prioritize critical content
		const timer = setTimeout(() => {
			setShouldLoad(true);
		}, 100); // Very short delay - just enough to let critical content render first

		return () => clearTimeout(timer);
	}, []);

	if (!shouldLoad) {
		return null;
	}

	return <ParticleBackground />;
};
