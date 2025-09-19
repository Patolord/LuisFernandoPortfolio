import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";

export const ContactContent = async () => {
	const t = await getTranslations("contact");

	const contactInfo = [
		{
			icon: Mail,
			title: t("email"),
			value: "loisfern1@hotmail.com",
		},
		{
			icon: Phone,
			title: t("phone"),
			value: "+55 (12) 98155-9280",
		},
		{
			icon: MapPin,
			title: t("location"),
			value: "São José dos Campos, SP",
		},
	];

	const whatsappUrl = `https://wa.me/5512981559280?text=${encodeURIComponent("Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades profissionais.")}`;

	return (
		<section className="py-16 px-6 bg-slate-900/50" data-section="contact">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8">{t("title")}</h2>
				<p className="text-xl text-slate-300 mb-12">{t("description")}</p>
				<div className="grid md:grid-cols-3 gap-8 mb-12">
					{contactInfo.map((contact) => {
						const IconComponent = contact.icon;
						return (
							<div key={contact.title} className="flex flex-col items-center">
								<IconComponent className="h-8 w-8 text-sky-400 mb-4" />
								<h3 className="font-bold mb-2">{contact.title}</h3>
								<p className="text-slate-300">{contact.value}</p>
							</div>
						);
					})}
				</div>
				<a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
					<Button
						size="lg"
						className="bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
					>
						<MessageCircle className="h-5 w-5 mr-2" />
						{t("whatsappContact")}
					</Button>
				</a>
			</div>
		</section>
	);
};
