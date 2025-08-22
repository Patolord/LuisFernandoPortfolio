"use client";

import { useTranslations } from "next-intl";

export const Footer = () => {
	const t = useTranslations("footer");
	return (
		<footer className="py-8 px-6 border-t border-slate-800">
			<div className="max-w-6xl mx-auto text-center text-slate-400">
				<p>{t("copyright")}</p>
			</div>
		</footer>
	);
};
