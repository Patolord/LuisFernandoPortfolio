import { getTranslations } from "next-intl/server";
import { ClientCarouselClient } from "./ClientCarousel";

const clients = [
	{
		name: "JetBlue",
		logo: "/images/clients/jetblue-logo.png",
		alt: "JetBlue Airways",
	},
	{
		name: "Eirtech",
		logo: "/images/clients/eirtech-logo.png",
		alt: "Eirtech Aviation Services",
	},
	{
		name: "SkyOn",
		logo: "/images/clients/skyon-logo.png",
		alt: "SkyOn Aviation Leasing",
	},
	{
		name: "Azul",
		logo: "/images/clients/azul-logo.png",
		alt: "Azul Brazilian Airlines",
	},
	{
		name: "North Compass",
		logo: "/images/clients/north-compass-logo.png",
		alt: "North Compass Aviation",
	},
	{
		name: "Avelo Airlines",
		logo: "/images/clients/avelo-logo.png",
		alt: "Avelo Airlines",
	},
	{
		name: "PCA Airworthiness",
		logo: "/images/clients/pca-logo.png",
		alt: "PCA Airworthiness",
	},
	{
		name: "Avianca Brasil",
		logo: "/images/clients/avianca-logo.png",
		alt: "Avianca Brasil",
	},
	{
		name: "TAM Airlines",
		logo: "/images/clients/tam-logo.png",
		alt: "TAM Airlines",
	},
	{
		name: "GECAS",
		logo: "/images/clients/gecas-logo.png",
		alt: "GECAS Leasing",
	},
];

export const ClientCarouselContent = async () => {
	const t = await getTranslations("clients");

	return (
		<ClientCarouselClient clients={clients} trustedByText={t("trustedBy")} />
	);
};
