// Structured Data for SEO
export const createStructuredData = (lang: "en" | "pt-BR") => {
	const isPortuguese = lang === "pt-BR";

	// These could be moved to translation files and imported
	const titles = {
		en: "Aviation Engineering Consultant",
		"pt-BR": "Consultor em Engenharia Aeronáutica",
	};

	const descriptions = {
		en: "Experienced aviation engineer with 20+ years in commercial aircraft maintenance, redelivery projects, and technical consultancy.",
		"pt-BR":
			"Engenheiro aeronáutico experiente com mais de 20 anos em manutenção de aeronaves comerciais, projetos de redelivery e consultoria técnica.",
	};

	return {
		"@context": "https://schema.org",
		"@type": ["Person", "ProfessionalService"],
		name: "Luis Fernando dos Santos",
		jobTitle: titles[lang],
		description: descriptions[lang],
		url: `https://luisfernandoportfolio.vercel.app/${lang}`,
		image: `https://luisfernandoportfolio.vercel.app/${lang}/opengraph-image`,
		sameAs: [
			"https://linkedin.com/in/luisfernandodossantos", // Add your actual LinkedIn
		],
		address: {
			"@type": "PostalAddress",
			addressLocality: "São José dos Campos",
			addressRegion: "SP",
			addressCountry: "BR",
		},
		email: "loisfern1@hotmail.com",
		telephone: "+55 (12) 98155-9280",
		areaServed: [
			{
				"@type": "Country",
				name: "Brazil",
			},
			{
				"@type": "Country",
				name: "International",
			},
		],
		serviceType: [
			isPortuguese ? "Consultoria em Aviação" : "Aviation Consulting",
			isPortuguese ? "Projetos de Redelivery" : "Redelivery Projects",
			isPortuguese ? "Inspeções de Aeronaves" : "Aircraft Inspections",
			isPortuguese ? "Auditoria de Registros" : "Records Auditing",
		],
		knowsAbout: [
			isPortuguese ? "Manutenção de Aeronaves" : "Aircraft Maintenance",
			isPortuguese ? "Projetos de Redelivery" : "Redelivery Projects",
			isPortuguese ? "Consultoria em Aviação" : "Aviation Consulting",
			"Airbus A320 Family",
			"Boeing 737/767/777",
			"Embraer E190/E195",
			isPortuguese
				? "Auditoria de Registros de Aeronaves"
				: "Aircraft Records Audit",
			isPortuguese ? "Inspeções de Lessor" : "Lessor Inspections",
		],
		hasCredential: [
			{
				"@type": "EducationalOccupationalCredential",
				name: isPortuguese ? "Engenharia Aeronáutica" : "Aviation Engineering",
				credentialCategory: isPortuguese
					? "Experiência Profissional"
					: "Professional Experience",
				description: isPortuguese
					? "Mais de 20 anos em manutenção de aeronaves comerciais e consultoria"
					: "20+ years in commercial aircraft maintenance and consultancy",
			},
		],
		workExample: [
			{
				"@type": "CreativeWork",
				name: isPortuguese
					? "Projetos de Redelivery de Aeronaves"
					: "Aircraft Redelivery Projects",
				description: isPortuguese
					? "Liderou inspeções abrangentes de redelivery e auditorias de registros para grandes companhias aéreas e empresas de leasing"
					: "Led comprehensive redelivery inspections and records audits for major airlines and leasing companies",
				about: [
					"Aircraft Inspection",
					"Records Audit",
					"Lessor Representative",
				],
			},
			{
				"@type": "CreativeWork",
				name: isPortuguese
					? "Projetos de Integração de Frota"
					: "Fleet Integration Projects",
				description: isPortuguese
					? "Integrou com sucesso aeronaves ATR-42 nas operações de frota da TAM Airlines"
					: "Successfully integrated ATR-42 aircraft into TAM Airlines fleet operations",
				about: [
					"Fleet Management",
					"Aircraft Integration",
					"Operational Planning",
				],
			},
		],
		makesOffer: {
			"@type": "Offer",
			name: isPortuguese
				? "Serviços de Consultoria em Aviação"
				: "Aviation Consulting Services",
			description: isPortuguese
				? "Consultoria especializada em manutenção de aeronaves, projetos de redelivery e inspeções técnicas"
				: "Specialized consulting in aircraft maintenance, redelivery projects, and technical inspections",
			areaServed: ["Brazil", "International"],
			availableDeliveryMethod: ["Remote", "On-site"],
		},
		award: [
			isPortuguese
				? "Zero Problemas de Conformidade"
				: "Zero Compliance Issues",
			isPortuguese ? "50+ Projetos Bem-sucedidos" : "50+ Successful Projects",
		],
	};
};
