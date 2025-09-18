import { getTranslations } from "next-intl/server";
import { NavigationButtonsClient } from "./NavigationButtons";

export const NavigationButtonsContent = async () => {
	const t = await getTranslations("nav");

	const navigationItems = [
		{ label: t("mission"), section: "mission" },
		{ label: t("experience"), section: "experience" },
		{ label: t("expertise"), section: "expertise" },
		{ label: t("contact"), section: "contact" },
	];

	return <NavigationButtonsClient items={navigationItems} />;
};
