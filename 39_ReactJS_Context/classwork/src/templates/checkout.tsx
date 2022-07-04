import React, { FunctionComponent } from "react";
import { Product } from "../domain/product";
import {
	StyledContainer,
	StyledList,
	StyledItem,
	StyledItemOrder,
	StyledTotal,
} from "./checkout.styled";

export type ShopCheckoutProductProps = {
	order: number;
	product: Product;
};

const ShopCheckoutProduct: FunctionComponent<ShopCheckoutProductProps> = ({
	order,
	product,
}) => {
	const { id, title } = product;

	return (
		<StyledItem key={id}>
			<StyledItemOrder>{order}</StyledItemOrder>
			<span>{title}</span>
		</StyledItem>
	);
};

export type ShopCheckoutProps = {
	items: Product[];
};

export const ShopCheckout: FunctionComponent<ShopCheckoutProps> = ({
	items,
}) => {
	if (items.length < 1) {
		return (
			<StyledContainer>
				<header>
					<h2>Your checkout is empty</h2>
				</header>
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<header>
				<h2>Title</h2>
			</header>
			<StyledList>
				{items.map((product, index) => (
					<ShopCheckoutProduct
						key={product.id}
						order={index + 1}
						product={product}
					/>
				))}
			</StyledList>
			<StyledTotal>
				<span>Title:</span>
				<strong>Amount</strong>
			</StyledTotal>
		</StyledContainer>
	);
};
