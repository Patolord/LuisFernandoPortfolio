import {
	Award,
	Clock,
	FileText,
	Mail,
	MapPin,
	Phone,
	Plane,
	Wrench,
} from "lucide-react";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getDictionary } from "./dictionaries";

// Structured Data for SEO
const structuredData = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Luis Fernando dos Santos",
	jobTitle: "Aviation Engineering Consultant",
	description:
		"Experienced aviation engineer with 18+ years in commercial aircraft maintenance, redelivery projects, and technical consultancy.",
	url: "https://luisfernandoportfolio.vercel.app",
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
	knowsAbout: [
		"Aircraft Maintenance",
		"Redelivery Projects",
		"Aviation Consulting",
		"Airbus A320 Family",
		"Boeing 737/767/777",
		"Embraer E190/E195",
		"Aircraft Records Audit",
		"Lessor Inspections",
	],
	hasCredential: [
		{
			"@type": "EducationalOccupationalCredential",
			name: "Aviation Engineering",
			credentialCategory: "Professional Experience",
			description:
				"18+ years in commercial aircraft maintenance and consultancy",
		},
	],
	workExample: [
		{
			"@type": "CreativeWork",
			name: "Aircraft Redelivery Projects",
			description:
				"Led comprehensive redelivery inspections and records audits for major airlines and leasing companies",
		},
		{
			"@type": "CreativeWork",
			name: "Fleet Integration Projects",
			description:
				"Successfully integrated ATR-42 aircraft into TAM Airlines fleet operations",
		},
	],
};

export default async function AviatorPortfolio({
	params,
}: {
	params: Promise<{
		lang: "en" | "pt-BR";
	}>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	// Generate unique IDs based on language to satisfy linter
	const aboutId = `about-${lang}`;
	const experienceId = `experience-${lang}`;
	const certificationsId = `certifications-${lang}`;
	const contactId = `contact-${lang}`;
	return (
		<>
			{/* Structured Data for SEO */}
			<script
				type="application/ld+json"
				suppressHydrationWarning={true}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData),
				}}
			/>

			<div className="min-h-screen bg-slate-950 text-slate-100">
				{/* Navigation */}
				<nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-sm border-b border-slate-800 z-50">
					<div className="max-w-6xl mx-auto px-6 py-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Plane className="h-6 w-6 text-sky-400" />
								<span className="text-xl font-bold">
									Luis Fernando dos Santos
								</span>
							</div>
							<div className="hidden md:flex items-center gap-6">
								<a
									href={`#${aboutId}`}
									className="hover:text-sky-400 transition-colors"
								>
									{dict.nav.about}
								</a>
								<a
									href={`#${experienceId}`}
									className="hover:text-sky-400 transition-colors"
								>
									{dict.nav.experience}
								</a>
								<a
									href={`#${certificationsId}`}
									className="hover:text-sky-400 transition-colors"
								>
									{dict.nav.expertise}
								</a>
								<a
									href={`#${contactId}`}
									className="hover:text-sky-400 transition-colors"
								>
									{dict.nav.contact}
								</a>
								<LanguageSwitcher currentLocale={lang} />
							</div>
						</div>
					</div>
				</nav>

				{/* Hero Section */}
				<section className="pt-20 pb-16 px-6">
					<div className="max-w-6xl mx-auto">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
									{dict.hero.title}
									<span className="text-sky-400 block">
										{dict.hero.subtitle}
									</span>
								</h1>
								<p className="text-xl text-slate-300 mb-8 leading-relaxed">
									{dict.hero.description}
								</p>
								<div className="flex flex-wrap gap-4 mb-8">
									<div className="flex items-center gap-2 text-slate-300">
										<Clock className="h-5 w-5 text-sky-400" />
										<span>{dict.hero.yearsExperience}</span>
									</div>
									<div className="flex items-center gap-2 text-slate-300">
										<MapPin className="h-5 w-5 text-sky-400" />
										<span>{dict.hero.location}</span>
									</div>
									<div className="flex items-center gap-2 text-slate-300">
										<Wrench className="h-5 w-5 text-sky-400" />
										<span>{dict.hero.multiPlatform}</span>
									</div>
								</div>
								<Button
									size="lg"
									className="bg-sky-600 hover:bg-sky-700 text-white"
								>
									{dict.hero.viewExperience}
								</Button>
							</div>
							<div className="relative">
								<div className="aspect-square rounded-2xl bg-gradient-to-br from-sky-900 to-slate-900 p-8 flex items-center justify-center">
									<Image
										width={400}
										height={400}
										src="/placeholder.svg"
										alt="Luis Fernando dos Santos"
										className="rounded-xl w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section id={aboutId} className="py-16 px-6 bg-slate-900/50">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-3xl font-bold mb-8 text-center">
							{dict.about.title}
						</h2>
						<div className="grid md:grid-cols-2 gap-12 items-center">
							<div>
								<p className="text-lg text-slate-300 mb-6 leading-relaxed">
									{dict.about.description1}
								</p>
								<p className="text-lg text-slate-300 leading-relaxed">
									{dict.about.description2}
								</p>
							</div>
							<div className="grid grid-cols-2 gap-6">
								<Card className="bg-slate-800 border-slate-700">
									<CardContent className="p-6 text-center">
										<div className="text-3xl font-bold text-sky-400 mb-2">
											18+
										</div>
										<div className="text-slate-300">
											{dict.about.stats.yearsExperience}
										</div>
									</CardContent>
								</Card>
								<Card className="bg-slate-800 border-slate-700">
									<CardContent className="p-6 text-center">
										<div className="text-3xl font-bold text-sky-400 mb-2">
											50+
										</div>
										<div className="text-slate-300">
											{dict.about.stats.aircraftProjects}
										</div>
									</CardContent>
								</Card>
								<Card className="bg-slate-800 border-slate-700">
									<CardContent className="p-6 text-center">
										<div className="text-3xl font-bold text-sky-400 mb-2">
											8
										</div>
										<div className="text-slate-300">
											{dict.about.stats.aircraftTypes}
										</div>
									</CardContent>
								</Card>
								<Card className="bg-slate-800 border-slate-700">
									<CardContent className="p-6 text-center">
										<div className="text-3xl font-bold text-sky-400 mb-2">
											15+
										</div>
										<div className="text-slate-300">
											{dict.about.stats.majorAirlines}
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Experience Section */}
				<section id={experienceId} className="py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-3xl font-bold mb-12 text-center">
							{dict.experience.title}
						</h2>
						<div className="space-y-8">
							<Card className="bg-slate-800 border-slate-700">
								<CardContent className="p-8">
									<div className="flex flex-wrap items-start justify-between mb-4">
										<div>
											<h3 className="text-xl font-bold text-sky-400 mb-2">
												{dict.experience.jobs.deliveryAuditor.title}
											</h3>
											<p className="text-slate-300">
												{dict.experience.jobs.deliveryAuditor.company}
											</p>
										</div>
										<Badge
											variant="secondary"
											className="bg-sky-900 text-sky-100"
										>
											{dict.experience.jobs.deliveryAuditor.period}
										</Badge>
									</div>
									<p className="text-slate-300 mb-4">
										{dict.experience.jobs.deliveryAuditor.description}
									</p>
									<div className="flex flex-wrap gap-2">
										<Badge
											variant="outline"
											className="border-slate-600 text-slate-300"
										>
											Embraer E195
										</Badge>
										<Badge
											variant="outline"
											className="border-slate-600 text-slate-300"
										>
											Records Audit
										</Badge>
										<Badge
											variant="outline"
											className="border-slate-600 text-slate-300"
										>
											AD/SB Compliance
										</Badge>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-slate-800 border-slate-700">
								<CardContent className="p-8">
									<div className="flex flex-wrap items-start justify-between mb-4">
										<div>
											<h3 className="text-xl font-bold text-sky-400 mb-2">
												{dict.experience.jobs.lessorRep.title}
											</h3>
											<p className="text-slate-300">
												{dict.experience.jobs.lessorRep.company}
											</p>
										</div>
										<Badge
											variant="secondary"
											className="bg-sky-900 text-sky-100"
										>
											{dict.experience.jobs.lessorRep.period}
										</Badge>
									</div>
									<p className="text-slate-300 mb-4">
										{dict.experience.jobs.lessorRep.description}
									</p>
									<div className="flex flex-wrap gap-2">
										<Badge
											variant="outline"
											className="border-slate-600 text-slate-300"
										>
											Redelivery Inspection
										</Badge>
										<Badge
											variant="outline"
											className="border-slate-600 text-slate-300"
										>
											EMB 195
										</Badge>
										<Badge
											variant="outline"
											className="border-slate-600 text-slate-300"
										>
											Lessor Compliance
										</Badge>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-slate-800 border-slate-700">
								<CardContent className="p-8">
									<div className="flex flex-wrap items-start justify-between mb-4">
										<div>
											<h3 className="text-xl font-bold text-sky-400 mb-2">
												{dict.experience.jobs.systemsEngineer.title}
											</h3>
											<p className="text-slate-300">
												{dict.experience.jobs.systemsEngineer.company}
											</p>
										</div>
										<Badge
											variant="secondary"
											className="bg-sky-900 text-sky-100"
										>
											{dict.experience.jobs.systemsEngineer.period}
										</Badge>
									</div>
									<p className="text-slate-300 mb-4">
										{dict.experience.jobs.systemsEngineer.description}
									</p>
									<div className="flex flex-wrap gap-2">
										<Badge
											variant="outline"
											className="border-slate-600 text-slate-300"
										>
											MEL Management
										</Badge>
										<Badge
											variant="outline"
											className="border-slate-600 text-slate-300"
										>
											ATR-42 Integration
										</Badge>
										<Badge
											variant="outline"
											className="border-slate-600 text-slate-300"
										>
											PMA Approvals
										</Badge>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-slate-800 border-slate-700">
								<CardContent className="p-8">
									<div className="flex flex-wrap items-start justify-between mb-4">
										<div>
											<h3 className="text-xl font-bold text-sky-400 mb-2">
												{dict.experience.jobs.engineer.title}
											</h3>
											<p className="text-slate-300">
												{dict.experience.jobs.engineer.company}
											</p>
										</div>
										<Badge
											variant="secondary"
											className="bg-sky-900 text-sky-100"
										>
											{dict.experience.jobs.engineer.period}
										</Badge>
									</div>
									<p className="text-slate-300 mb-4">
										{dict.experience.jobs.engineer.description}
									</p>
									<div className="flex flex-wrap gap-2">
										<Badge
											variant="outline"
											className="border-slate-600 text-slate-300"
										>
											A320/A330 Fleet
										</Badge>
										<Badge
											variant="outline"
											className="border-slate-600 text-slate-300"
										>
											Heavy Maintenance
										</Badge>
										<Badge
											variant="outline"
											className="border-slate-600 text-slate-300"
										>
											Redelivery Projects
										</Badge>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Technical Expertise Section */}
				<section id={certificationsId} className="py-16 px-6 bg-slate-900/50">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-3xl font-bold mb-12 text-center">
							{dict.expertise.title}
						</h2>

						{/* Aircraft Types */}
						<div className="mb-12">
							<h3 className="text-xl font-bold mb-6 text-sky-400">
								{dict.expertise.aircraftPlatforms}
							</h3>
							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
								{[
									"Airbus A320 Family",
									"Airbus A330/A340",
									"Boeing 737/767/777",
									"Embraer E190/E195",
									"ATR-42/72",
									"Fokker F-100",
								].map((aircraft) => (
									<Card
										key={aircraft}
										className="bg-slate-800 border-slate-700"
									>
										<CardContent className="p-4 text-center">
											<Plane className="h-6 w-6 text-sky-400 mx-auto mb-2" />
											<p className="text-sm font-medium">{aircraft}</p>
										</CardContent>
									</Card>
								))}
							</div>
						</div>

						{/* Engine Types */}
						<div className="mb-12">
							<h3 className="text-xl font-bold mb-6 text-sky-400">
								{dict.expertise.engineExperience}
							</h3>
							<div className="grid md:grid-cols-3 gap-4">
								{["CFM56", "LEAP-1A", "V2500"].map((engine) => (
									<Card key={engine} className="bg-slate-800 border-slate-700">
										<CardContent className="p-4 text-center">
											<Wrench className="h-6 w-6 text-sky-400 mx-auto mb-2" />
											<p className="text-sm font-medium">{engine}</p>
										</CardContent>
									</Card>
								))}
							</div>
						</div>

						{/* Specializations */}
						<div>
							<h3 className="text-xl font-bold mb-6 text-sky-400">
								{dict.expertise.coreSpecializations}
							</h3>
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
								<Card className="bg-slate-800 border-slate-700">
									<CardContent className="p-6">
										<FileText className="h-8 w-8 text-sky-400 mb-4" />
										<h4 className="font-bold mb-2">
											{dict.expertise.specializations.redelivery.title}
										</h4>
										<p className="text-slate-300 text-sm">
											{dict.expertise.specializations.redelivery.description}
										</p>
									</CardContent>
								</Card>
								<Card className="bg-slate-800 border-slate-700">
									<CardContent className="p-6">
										<Award className="h-8 w-8 text-sky-400 mb-4" />
										<h4 className="font-bold mb-2">
											{dict.expertise.specializations.certifications.title}
										</h4>
										<p className="text-slate-300 text-sm">
											{
												dict.expertise.specializations.certifications
													.description
											}
										</p>
									</CardContent>
								</Card>
								<Card className="bg-slate-800 border-slate-700">
									<CardContent className="p-6">
										<Wrench className="h-8 w-8 text-sky-400 mb-4" />
										<h4 className="font-bold mb-2">
											{dict.expertise.specializations.systems.title}
										</h4>
										<p className="text-slate-300 text-sm">
											{dict.expertise.specializations.systems.description}
										</p>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id={contactId} className="py-16 px-6">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-8">{dict.contact.title}</h2>
						<p className="text-xl text-slate-300 mb-12">
							{dict.contact.description}
						</p>
						<div className="grid md:grid-cols-3 gap-8 mb-12">
							<div className="flex flex-col items-center">
								<Mail className="h-8 w-8 text-sky-400 mb-4" />
								<h3 className="font-bold mb-2">{dict.contact.email}</h3>
								<p className="text-slate-300">loisfern1@hotmail.com</p>
							</div>
							<div className="flex flex-col items-center">
								<Phone className="h-8 w-8 text-sky-400 mb-4" />
								<h3 className="font-bold mb-2">{dict.contact.phone}</h3>
								<p className="text-slate-300">+55 (12) 98155-9280</p>
							</div>
							<div className="flex flex-col items-center">
								<MapPin className="h-8 w-8 text-sky-400 mb-4" />
								<h3 className="font-bold mb-2">{dict.contact.location}</h3>
								<p className="text-slate-300">São José dos Campos, SP</p>
							</div>
						</div>
						<Button
							size="lg"
							className="bg-sky-600 hover:bg-sky-700 text-white"
						>
							{dict.contact.downloadResume}
						</Button>
					</div>
				</section>

				{/* Footer */}
				<footer className="py-8 px-6 border-t border-slate-800">
					<div className="max-w-6xl mx-auto text-center text-slate-400">
						<p>{dict.footer.copyright}</p>
					</div>
				</footer>
			</div>
		</>
	);
}
