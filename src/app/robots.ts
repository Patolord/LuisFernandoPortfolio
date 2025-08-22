import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = "https://luisfernandoportfolio.vercel.app";

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: [
					"/private/",
					"/admin/",
					"/api/", // Protect API routes if any
					"/_next/", // Next.js internal files
					"/.*\\.*\\.*\\.txt$", // Temporary files
				],
				crawlDelay: 1, // Be respectful to crawlers
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: ["/private/", "/admin/"],
				crawlDelay: 0, // Google can crawl faster
			},
			{
				userAgent: "Bingbot",
				allow: "/",
				disallow: ["/private/", "/admin/"],
				crawlDelay: 1,
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}
