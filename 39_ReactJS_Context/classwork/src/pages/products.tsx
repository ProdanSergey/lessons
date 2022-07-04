import React, { FunctionComponent, memo } from "react";
import { Product } from "../domain/product";
import { PRODUCTS } from "../shared/mocks/product";
import { ShopProducts } from "../templates/products";

export type ProductsPageProps = {
	onProductAdd: (product: Product) => void;
};

const Component: FunctionComponent<ProductsPageProps> = ({ onProductAdd }) => {
	return (
		<div>
			<ShopProducts items={PRODUCTS} onProductAdd={onProductAdd} />
		</div>
	);
};

export const ProductsPage = memo(Component);
ProductsPage.displayName = "ProductsPage";
