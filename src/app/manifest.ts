import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Luis Fernando dos Santos - Aviation Engineering Consultant",
		short_name: "Luis Fernando Portfolio",
		description:
			"Experienced aviation engineer with 18+ years in commercial aircraft maintenance, redelivery projects, and technical consultancy.",
		start_url: "/",
		display: "standalone",
		background_color: "#0f172a",
		theme_color: "#38bdf8",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
			{
				src: "/icon?size=192",
				type: "image/png",
				sizes: "192x192",
			},
			{
				src: "/icon?size=512",
				type: "image/png",
				sizes: "512x512",
			},
		],
	};
}
