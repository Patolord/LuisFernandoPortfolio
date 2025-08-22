import { Mail, MapPin, Phone } from "lucide-react";
import { ContactButton } from "./ContactButton";

const contactInfo = [
	{
		icon: Mail,
		title: "Email",
		value: "loisfern1@hotmail.com",
	},
	{
		icon: Phone,
		title: "Phone",
		value: "+55 (12) 98155-9280",
	},
	{
		icon: MapPin,
		title: "Location",
		value: "São José dos Campos, SP",
	},
];

export const ContactContent = () => {
	return (
		<section className="py-16 px-6 bg-slate-900/50" data-section="contact">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8">
					Ready to Streamline Your Aviation Operations?
				</h2>
				<p className="text-xl text-slate-300 mb-12">
					Get expert aviation engineering support that saves time, reduces
					costs, and ensures compliance. Contact me today for a free
					consultation on your next project.
				</p>
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
				<ContactButton />
			</div>
		</section>
	);
};
