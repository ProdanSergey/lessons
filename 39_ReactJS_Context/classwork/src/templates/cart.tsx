import React, { FunctionComponent } from "react";
import { Product } from "../domain/product";
import Cart from "../icons/cart.svg";
import { StyledButton, StyledIndicator } from "./cart.styled";

type ShopCartProps = {
	items: Product[];
};

export const ShopCart: FunctionComponent<ShopCartProps> = ({ items }) => {
	return (
		<StyledButton>
			<Cart width="2em" height="2em" />
			<StyledIndicator>{items.length}</StyledIndicator>
		</StyledButton>
	);
};
