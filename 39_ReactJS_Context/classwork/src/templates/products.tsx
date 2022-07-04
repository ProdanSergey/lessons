import React, { FunctionComponent } from "react";
import { Product } from "../domain/product";
import {
	StyledItem,
	StyledProduct,
	StyledBreakdown,
	StyledCTA,
} from "./products.styled";

export type ShopProductsProps = {
	items: Product[];
};

export const ShopProducts: FunctionComponent<ShopProductsProps> = ({
	items,
}) => {
	return (
		<ul>
			{items.map((product) => {
				const { id, title, description, price, image } = product;

				return (
					<StyledItem key={id}>
						<StyledProduct>
							<img src={image} alt={title} />
							<StyledBreakdown>
								<ul>
									<li>{title}</li>
									<li>
										<strong>{price}</strong>
									</li>
								</ul>
							</StyledBreakdown>
						</StyledProduct>
						<p>{description}</p>
						<StyledCTA>Add To Cart</StyledCTA>
					</StyledItem>
				);
			})}
		</ul>
	);
};
