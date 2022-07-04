import { AvailableLocale } from "../../../domain/locale";

export const mapCurrency = (locale: AvailableLocale) => {
	if (locale === "uk-UA") return "UAH";
	return "GBP";
};

export const toCurrency = (value: number): string => {
	return String(value);
};
