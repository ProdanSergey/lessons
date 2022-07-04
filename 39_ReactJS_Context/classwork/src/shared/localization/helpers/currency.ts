import { AvailableLocale } from "../../../domain/locale";

export const mapCurrency = (locale: AvailableLocale) => {
	if (locale === "uk-UA") return "UAH";
	return "GBP";
};

export const toCurrency = (value: number, locale: AvailableLocale): string => {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: mapCurrency(locale),
	}).format(value);
};
