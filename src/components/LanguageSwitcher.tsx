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
		<div className="relative inline-flex items-center bg-gray-100 rounded-lg p-0.5">
			{/* Background slider */}
			<div
				className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] bg-sky-500 rounded-md transition-transform duration-200 ease-in-out ${
					currentLocale === "pt-BR" ? "translate-x-full" : "translate-x-0"
				}`}
			/>

			{/* English option */}
			<button
				onClick={() => switchLanguage("en")}
				className={`relative z-10 flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-colors duration-200 ${
					currentLocale === "en"
						? "text-white"
						: "text-gray-600 hover:text-gray-800"
				}`}
				title="Switch to English"
			>
				<GB className="w-3 h-2 rounded-sm" />
				<span>EN</span>
			</button>

			{/* Portuguese option */}
			<button
				onClick={() => switchLanguage("pt-BR")}
				className={`relative z-10 flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-colors duration-200 ${
					currentLocale === "pt-BR"
						? "text-white"
						: "text-gray-600 hover:text-gray-800"
				}`}
				title="Switch to Portuguese"
			>
				<BR className="w-3 h-2 rounded-sm" />
				<span>PT</span>
			</button>
		</div>
	);
}
