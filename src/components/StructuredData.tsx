import { createStructuredData } from "@/lib/structured-data";

interface StructuredDataProps {
	lang: "en" | "pt-BR";
}

export default function StructuredData({ lang }: StructuredDataProps) {
	const structuredData = createStructuredData(lang);

	return (
		<script
			type="application/ld+json"
			suppressHydrationWarning={true}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData),
			}}
		/>
	);
}
