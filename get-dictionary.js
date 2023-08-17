// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
    en: () => import("./dictionaries/en.json").then((module) => module.default),
    uz: () => import("./dictionaries/uz.json").then((module) => module.default),
    ru: () => import("./dictionaries/ru.json").then((module) => module.default),
    tr: () => import("./dictionaries/tr.json").then((module) => module.default),
    tj: () => import("./dictionaries/tj.json").then((module) => module.default),
    kz: () => import("./dictionaries/kz.json").then((module) => module.default),
    kg: () => import("./dictionaries/kg.json").then((module) => module.default),
};

export const getDictionary = async (locale) =>
    dictionaries[locale]?.() ?? dictionaries.en();
