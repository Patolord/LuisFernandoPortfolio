import { getTranslations } from "next-intl/server";
import { HeroButtonsClient } from "./HeroButtons";

export const HeroButtonsContent = async () => {
	const t = await getTranslations("hero");

	return (
		<HeroButtonsClient
			getFreeConsultationText={t("getFreeConsultation")}
			viewTrackRecordText={t("viewTrackRecord")}
		/>
	);
};
