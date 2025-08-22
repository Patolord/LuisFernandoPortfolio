import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { NavigationButtons } from "./NavigationButtons";

interface NavigationBarProps {
	currentLocale: "en" | "pt-BR";
}

export const NavigationBar = ({ currentLocale }: NavigationBarProps) => {
	return (
		<nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800 z-50 transition-all duration-300">
			<div className="max-w-6xl mx-auto px-6">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center gap-4">
						<Image
							src="/images/lfs-aviation-logo.jpg"
							alt="LFS Aviation Logo"
							width={48}
							height={48}
							className="h-12 w-auto"
						/>
						<div>
							<h1 className="font-bold text-lg">Luis Fernando dos Santos</h1>
							<p className="text-sm text-slate-400">
								Aviation Engineering Consultant
							</p>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<LanguageSwitcher currentLocale={currentLocale} />
						<NavigationButtons />
					</div>
				</div>
			</div>
		</nav>
	);
};
