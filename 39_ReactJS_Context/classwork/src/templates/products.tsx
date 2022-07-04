import React, { FunctionComponent, useContext } from "react";
import { InternalizationContext } from "../contexts/internalization";
import { Product } from "../domain/product";
import { toCurrency } from "../shared/localization/helpers/currency";
import {
	StyledItem,
	StyledProduct,
	StyledBreakdown,
	StyledCTA,
} from "./products.styled";

export type ShopProductsProps = {
	items: Product[];
	onProductAdd: (product: Product) => void;
};

export const ShopProducts: FunctionComponent<ShopProductsProps> = ({
	items,
	onProductAdd,
}) => {
	const { locale, resource } = useContext(InternalizationContext);

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
										<strong>{toCurrency(price, locale)}</strong>
									</li>
								</ul>
							</StyledBreakdown>
						</StyledProduct>
						<p>{description}</p>
						<StyledCTA onClick={() => onProductAdd(product)}>
							{resource.product.cta}
						</StyledCTA>
					</StyledItem>
				);
			})}
		</ul>
	);
};
