"use client";

import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { NavigationButtons } from "./NavigationButtons";

interface NavigationBarProps {
	currentLocale: "en" | "pt-BR";
}

export const NavigationBar = ({ currentLocale }: NavigationBarProps) => {
	return (
		<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/20 z-50 transition-all duration-300 hover:shadow-xl">
			<div className="px-6 lg:px-12 xl:px-16">
				<div className="flex items-center justify-between h-14">
					<div className="flex items-center gap-4 flex-1 min-w-0">
						<Image
							src="/images/lfs-aviation-logo-nobg.png"
							alt="LFS Aviation Logo"
							width={96}
							height={96}
							className="h-14 w-14 object-cover flex-shrink-0"
							priority
						/>
						<div className="hidden 2xs:block max-w-[160px] 2xs:max-w-[200px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-none min-w-0">
							<h1 className="font-bold text-xs 2xs:text-sm sm:text-base md:text-lg whitespace-nowrap overflow-hidden text-gray-900">
								Luis Fernando
							</h1>
						</div>
					</div>
					<div className="flex items-center gap-4 flex-shrink-0">
						<NavigationButtons />
						<LanguageSwitcher currentLocale={currentLocale} />
					</div>
				</div>
			</div>
		</nav>
	);
};
