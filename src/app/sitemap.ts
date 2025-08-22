import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://luisfernandoportfolio.vercel.app";
	const currentDate = new Date();

	// Define all available languages
	const languages = ["en", "pt-BR"] as const;

	// Generate sitemap entries
	const sitemapEntries: MetadataRoute.Sitemap = [];

	// Root redirect page
	sitemapEntries.push({
		url: baseUrl,
		lastModified: currentDate,
		changeFrequency: "monthly",
		priority: 1.0,
		alternates: {
			languages: {
				en: `${baseUrl}/en`,
				"pt-BR": `${baseUrl}/pt-BR`,
			},
		},
	});

	// Language-specific pages
	languages.forEach((lang) => {
		sitemapEntries.push({
			url: `${baseUrl}/${lang}`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.9,
			alternates: {
				languages: {
					en: `${baseUrl}/en`,
					"pt-BR": `${baseUrl}/pt-BR`,
				},
			},
		});

		// Add OpenGraph images to sitemap for better indexing
		sitemapEntries.push({
			url: `${baseUrl}/${lang}/opengraph-image`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.3,
		});

		// Add Twitter images to sitemap
		sitemapEntries.push({
			url: `${baseUrl}/${lang}/twitter-image`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.3,
		});
	});

	// Add manifest and robots.txt
	sitemapEntries.push({
		url: `${baseUrl}/manifest.json`,
		lastModified: currentDate,
		changeFrequency: "yearly",
		priority: 0.1,
	});

	sitemapEntries.push({
		url: `${baseUrl}/robots.txt`,
		lastModified: currentDate,
		changeFrequency: "yearly",
		priority: 0.1,
	});

	return sitemapEntries;
}
