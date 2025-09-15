"use client";

import { BR, GB } from "country-flag-icons/react/3x2";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Locale = "en" | "pt-BR";

interface LanguageSwitcherProps {
	currentLocale: Locale;
}

export default function LanguageSwitcher({
	currentLocale,
}: LanguageSwitcherProps) {
	const router = useRouter();
	const pathname = usePathname();

	const switchLanguage = (newLocale: Locale) => {
		// Remove the current locale from the pathname and add the new one
		const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
		const newPath = `/${newLocale}${pathWithoutLocale}`;
		router.push(newPath);
	};

	const getLanguageInfo = (locale: Locale) => {
		switch (locale) {
			case "en":
				return { label: "EN", flag: GB, name: "English" };
			case "pt-BR":
				return { label: "PT", flag: BR, name: "Português" };
			default:
				return { label: "EN", flag: GB, name: "English" };
		}
	};

	const getOtherLocale = (locale: Locale): Locale => {
		return locale === "en" ? "pt-BR" : "en";
	};

	const otherLocale = getOtherLocale(currentLocale);
	const otherLanguageInfo = getLanguageInfo(otherLocale);
	const currentLanguageInfo = getLanguageInfo(currentLocale);

	const _FlagIcon = currentLanguageInfo.flag;
	const _OtherFlagIcon = otherLanguageInfo.flag;

	return (
		<div className="flex items-center gap-2">
			{/* English side - always on the left */}
			<Button
				variant="ghost"
				size="sm"
				onClick={() => switchLanguage("en")}
				className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
					currentLocale === "en"
						? "bg-slate-800 border border-slate-600 text-slate-200"
						: "text-slate-400 hover:text-slate-200 hover:bg-slate-700"
				}`}
				title="Switch to English"
			>
				<GB className="w-4 h-3" />
				<span>EN</span>
			</Button>

			{/* Portuguese side - always on the right */}
			<Button
				variant="ghost"
				size="sm"
				onClick={() => switchLanguage("pt-BR")}
				className={`flex items-center gap-2 transition-all duration-200 ${
					currentLocale === "pt-BR"
						? "bg-slate-800 border border-slate-600 text-slate-200 hover:bg-slate-700"
						: "text-slate-400 hover:text-slate-200 hover:bg-slate-700"
				}`}
				title="Switch to Portuguese"
			>
				<BR className="w-4 h-3" />
				<span>PT</span>
			</Button>
		</div>
	);
}
