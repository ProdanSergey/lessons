import React, { FunctionComponent } from "react";
import { PRODUCTS } from "../shared/mocks/product";
import { ShopProducts } from "../templates/products";

export const ProductsPage: FunctionComponent = () => {
	return (
		<div>
			<ShopProducts items={PRODUCTS} />
		</div>
	);
};
