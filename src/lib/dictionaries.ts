import "server-only";

const dictionaries = {
	en: () => import("../dictionaries/en.json").then((module) => module.default),
	"pt-BR": () =>
		import("../dictionaries/pt-BR.json").then((module) => module.default),
} as const;

export const getDictionary = async (locale: "en" | "pt-BR") => {
	const dictionaryLoader = dictionaries[locale];
	if (!dictionaryLoader) {
		throw new Error(`Dictionary for locale "${locale}" not found`);
	}
	return await dictionaryLoader();
};

export type Locale = "en" | "pt-BR";
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
