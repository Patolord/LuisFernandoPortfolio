import type { Metadata } from "next";
import type React from "react";

// Generate dynamic metadata based on language
export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: "en" | "pt-BR" }>;
}): Promise<Metadata> {
	const { lang } = await params;

	const isPortuguese = lang === "pt-BR";

	const titles = {
		en: "Luis Fernando dos Santos - Aviation Engineering Consultant",
		"pt-BR": "Luis Fernando dos Santos - Consultor em Engenharia Aeronáutica",
	};

	const descriptions = {
		en: "Experienced aviation engineer with 18+ years in commercial aircraft maintenance, redelivery projects, and technical consultancy. Specializing in Airbus, Boeing, Embraer fleet operations.",
		"pt-BR":
			"Engenheiro aeronáutico experiente com mais de 18 anos em manutenção de aeronaves comerciais, projetos de redelivery e consultoria técnica. Especialista em operações de frota Airbus, Boeing, Embraer.",
	};

	const keywords = {
		en: [
			"aviation engineer",
			"aircraft maintenance",
			"redelivery projects",
			"aviation consultant",
			"aircraft inspection",
			"lessor representative",
			"Airbus",
			"Boeing",
			"Embraer",
			"commercial aviation",
			"São José dos Campos",
			"Brazil",
			"aviation engineering",
			"aircraft records audit",
			"fleet management",
		],
		"pt-BR": [
			"engenheiro aeronáutico",
			"manutenção de aeronaves",
			"projetos de redelivery",
			"consultor aviação",
			"inspeção de aeronaves",
			"representante lessor",
			"Airbus",
			"Boeing",
			"Embraer",
			"aviação comercial",
			"São José dos Campos",
			"Brasil",
			"engenharia aeronáutica",
			"auditoria registros aeronaves",
			"gestão de frota",
		],
	};

	return {
		title: titles[lang],
		description: descriptions[lang],
		keywords: keywords[lang].join(", "),
		authors: [{ name: "Luis Fernando dos Santos" }],
		creator: "Luis Fernando dos Santos",
		publisher: "Luis Fernando dos Santos",
		metadataBase: new URL("https://luisfernandoportfolio.vercel.app"),
		alternates: {
			canonical: `/${lang}`,
			languages: {
				en: "/en",
				"pt-BR": "/pt-BR",
			},
		},
		openGraph: {
			type: "website",
			locale: isPortuguese ? "pt_BR" : "en_US",
			url: `https://luisfernandoportfolio.vercel.app/${lang}`,
			title: titles[lang],
			description: descriptions[lang],
			siteName: "Luis Fernando dos Santos Portfolio",
			images: [
				{
					url: `https://luisfernandoportfolio.vercel.app/${lang}/opengraph-image`,
					width: 1200,
					height: 630,
					alt: titles[lang],
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: titles[lang],
			description: descriptions[lang],
			images: [
				`https://luisfernandoportfolio.vercel.app/${lang}/opengraph-image`,
			],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		verification: {
			google: "your-google-verification-code",
		},
		category: "Professional Services",
		classification: "Aviation Engineering Consulting",
		other: {
			"linkedin:card": "summary_large_image",
			"business:contact_data:street_address": "São José dos Campos",
			"business:contact_data:locality": "São Paulo",
			"business:contact_data:region": "SP",
			"business:contact_data:country_name": "Brazil",
			"business:contact_data:email": "loisfern1@hotmail.com",
			"business:contact_data:phone_number": "+55 (12) 98155-9280",
		},
	};
}

export async function generateStaticParams() {
	return [{ lang: "en" }, { lang: "pt-BR" }];
}

export default async function LangLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	const { lang } = await params;

	return <div lang={lang}>{children}</div>;
}
