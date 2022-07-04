import React, { FunctionComponent, useContext } from "react";
import { InternalizationContext } from "../contexts/internalization";
import { AvailableLocale } from "../domain/locale";
import { mapLocaleIcon } from "../shared/localization/helpers/locale";
import { StyledLink } from "./locale.styled";

const toggleLocale = (locale: AvailableLocale): AvailableLocale => {
	if (locale === "en-GB") return "uk-UA";
	return "en-GB";
};

export const Locale: FunctionComponent = () => {
	const { locale } = useContext(InternalizationContext);

	return (
		<StyledLink href={window.location.origin + "/" + toggleLocale(locale)}>
			{mapLocaleIcon(locale)}
		</StyledLink>
	);
};
