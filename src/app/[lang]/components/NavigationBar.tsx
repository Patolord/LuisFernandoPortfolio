"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { NavigationButtons } from "./NavigationButtons";

interface NavigationBarProps {
	currentLocale: "en" | "pt-BR";
}

export const NavigationBar = ({ currentLocale }: NavigationBarProps) => {
	const t = useTranslations();

	return (
		<nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800 z-50 transition-all duration-300">
			<div className="max-w-6xl mx-auto px-6">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center gap-4">
						<Image
							src="/images/lfs-aviation-logo-nobg.png"
							alt="LFS Aviation Logo"
							width={128}
							height={128}
							className="h-20 w-20 object-cover"
							priority
						/>
						<div>
							<h1 className="font-bold text-lg">Luis Fernando dos Santos</h1>
							<p className="text-sm text-slate-400">{t("nav.slogan")}</p>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<NavigationButtons />
						<LanguageSwitcher currentLocale={currentLocale} />
					</div>
				</div>
			</div>
		</nav>
	);
};
