"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

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

  const getLanguageLabel = (locale: Locale) => {
    switch (locale) {
      case "en":
        return "EN";
      case "pt-BR":
        return "PT";
      default:
        return "EN";
    }
  };

  const getOtherLocale = (locale: Locale): Locale => {
    return locale === "en" ? "pt-BR" : "en";
  };

  const otherLocale = getOtherLocale(currentLocale);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => switchLanguage(otherLocale)}
      className="flex items-center gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
    >
      <Languages className="h-4 w-4" />
      {getLanguageLabel(otherLocale)}
    </Button>
  );
}
