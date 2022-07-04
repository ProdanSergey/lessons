import React, { FunctionComponent } from "react";
import { Product } from "../domain/product";
import { ShopCheckout } from "../templates/checkout";

type CheckoutPageProps = {
	items: Product[];
};

export const CheckoutPage: FunctionComponent<CheckoutPageProps> = ({
	items,
}) => {
	return (
		<div>
			<ShopCheckout items={items} />
		</div>
	);
};
