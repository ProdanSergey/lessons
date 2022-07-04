import { AvailableLocale } from "../../../domain/locale";

export const mapLocaleIcon = (locale: AvailableLocale) => {
	if (locale === "uk-UA") return "🇺🇦";
	return "🇬🇧";
};
