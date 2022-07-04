import React, { FunctionComponent, useContext } from "react";
import { InternalizationContext } from "../contexts/internalization";
import { Product } from "../domain/product";
import {
	StyledContainer,
	StyledList,
	StyledItem,
	StyledItemOrder,
	StyledTotal,
	StyledItemCounter,
} from "./checkout.styled";

type CheckoutProduct = Product & {
	count: number;
};

type Checkout = {
	products: Record<string, CheckoutProduct>;
	total: number;
};

const mapProductsToCheckout = (products: Product[]): Checkout => {
	const defaultCheckout: Checkout = {
		products: {},
		total: 0,
	};

	const increment = (checkoutProduct: CheckoutProduct): CheckoutProduct => {
		return {
			...checkoutProduct,
			count: checkoutProduct.count + 1,
		};
	};

	return products.reduce(({ products, total }, current) => {
		const { id } = current;

		return {
			products: {
				...products,
				[id]:
					id in products
						? increment(products[id])
						: increment({ ...current, count: 0 }),
			},
			total: total + current.price,
		};
	}, defaultCheckout);
};

export type ShopCheckoutProductProps = {
	order: number;
	product: CheckoutProduct;
};

const ShopCheckoutProduct: FunctionComponent<ShopCheckoutProductProps> = ({
	order,
	product,
}) => {
	const { id, title, count } = product;

	return (
		<StyledItem key={id}>
			<StyledItemOrder>{order}</StyledItemOrder>
			<span>{title}</span>
			{count > 1 && <StyledItemCounter>x{count}</StyledItemCounter>}
		</StyledItem>
	);
};

export type ShopCheckoutProps = {
	items: Product[];
};

export const ShopCheckout: FunctionComponent<ShopCheckoutProps> = ({
	items,
}) => {
	const { resource } = useContext(InternalizationContext);

	const { products, total } = mapProductsToCheckout(items);

	if (items.length < 1) {
		return (
			<StyledContainer>
				<header>
					<h2>{resource.checkout.empty}</h2>
				</header>
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<header>
				<h2>{resource.checkout.title}</h2>
			</header>
			<StyledList>
				{Object.keys(products).map((key, index) => {
					const checkoutProduct = products[key];

					return (
						<ShopCheckoutProduct
							key={checkoutProduct.id}
							order={index + 1}
							product={checkoutProduct}
						/>
					);
				})}
			</StyledList>
			<StyledTotal>
				<span>{resource.checkout.total.title}:</span>
				<strong>{total}</strong>
			</StyledTotal>
		</StyledContainer>
	);
};
