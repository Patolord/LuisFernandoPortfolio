import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://luisfernandoportfolio.vercel.app";

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
			alternates: {
				languages: {
					en: `${baseUrl}/en`,
					"pt-BR": `${baseUrl}/pt-BR`,
				},
			},
		},
		{
			url: `${baseUrl}/en`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/pt-BR`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
	];
}
