import React, {
	createContext,
	FunctionComponent,
	PropsWithChildren,
} from "react";
import { AvailableLocale } from "../domain/locale";

import enGB from "../shared/localization/en_GB.json";
import ukUA from "../shared/localization/uk_UA.json";

const getDefaultLocale = (): AvailableLocale => {
	const locale = window.location.pathname.slice(1).split("/")[0];

	return ["en-GB", "uk-UA"].includes(locale)
		? (locale as AvailableLocale)
		: "en-GB";
};

type AvailableResource = typeof enGB | typeof ukUA;

const mapResource = (locale: AvailableLocale): AvailableResource => {
	if (locale === "uk-UA") return ukUA;
	return enGB;
};

type InternalizationContextType = {
	locale: AvailableLocale;
	resource: AvailableResource;
};

export const InternalizationContext = createContext<InternalizationContextType>(
	{
		locale: "en-GB",
		resource: enGB,
	}
);

export const InternalizationProvider: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	const locale = getDefaultLocale();

	return (
		<InternalizationContext.Provider
			value={{
				locale,
				resource: mapResource(locale),
			}}
		>
			{children}
		</InternalizationContext.Provider>
	);
};
