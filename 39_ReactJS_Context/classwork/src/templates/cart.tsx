import React, { FunctionComponent } from "react";
import Cart from "../icons/cart.svg";
import { StyledButton, StyledIndicator } from "./cart.styled";

export const ShopCart: FunctionComponent = () => {
	return (
		<StyledButton>
			<Cart width="2em" height="2em" />
			<StyledIndicator>0</StyledIndicator>
		</StyledButton>
	);
};
