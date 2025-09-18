import { getTranslations } from "next-intl/server";
import { ContactButtonClient } from "./ContactButton";

export const ContactButtonContent = async () => {
	const t = await getTranslations("contact");

	return <ContactButtonClient downloadResumeText={t("downloadResume")} />;
};
