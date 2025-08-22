"use client";

import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Locale = "en" | "pt-BR";

interface LanguageSwitcherProps {
	currentLocale: Locale;
}

export default function LanguageSwitcher({
	currentLocale,
}: LanguageSwitcherProps) {
	const pathname = usePathname();
	const router = useRouter();

	const switchLanguage = (newLocale: Locale) => {
		// Remove the current locale from the pathname and add the new one
		const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
		const newPath = `/${newLocale}${pathWithoutLocale}`;
		router.push(newPath);
	};

	const getLanguageInfo = (locale: Locale) => {
		switch (locale) {
			case "en":
				return { label: "EN", flag: "🇺🇸", name: "English" };
			case "pt-BR":
				return { label: "PT", flag: "🇧🇷", name: "Português" };
			default:
				return { label: "EN", flag: "🇺🇸", name: "English" };
		}
	};

	const getOtherLocale = (locale: Locale): Locale => {
		return locale === "en" ? "pt-BR" : "en";
	};

	const otherLocale = getOtherLocale(currentLocale);
	const otherLanguageInfo = getLanguageInfo(otherLocale);
	const currentLanguageInfo = getLanguageInfo(currentLocale);

	return (
		<div className="flex items-center gap-2">
			{/* Current language indicator */}
			<div className="flex items-center gap-1 text-slate-400 text-sm">
				<span>{currentLanguageInfo.flag}</span>
				<span>{currentLanguageInfo.label}</span>
			</div>

			{/* Language switcher button */}
			<Button
				variant="outline"
				size="sm"
				onClick={() => switchLanguage(otherLocale)}
				className="flex items-center gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200"
				title={`Switch to ${otherLanguageInfo.name}`}
			>
				<Languages className="h-4 w-4" />
				<span>{otherLanguageInfo.flag}</span>
				<span>{otherLanguageInfo.label}</span>
			</Button>
		</div>
	);
}
