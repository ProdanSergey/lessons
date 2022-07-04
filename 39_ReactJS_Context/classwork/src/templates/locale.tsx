import React, { FunctionComponent } from "react";
import { Button } from "../shared/layout/button";

export const Locale: FunctionComponent = () => {
	return (
		<Button>
			<span style={{ fontSize: "2em" }}>{"🇬🇧"}</span>
		</Button>
	);
};
