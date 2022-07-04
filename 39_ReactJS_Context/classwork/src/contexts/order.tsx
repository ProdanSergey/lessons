import React, {
	createContext,
	FunctionComponent,
	PropsWithChildren,
	useState,
} from "react";
import { Product } from "../domain/product";

type OrderContextType = {
	products: Product[];
	add: (product: Product) => void;
};

export const OrderContext = createContext<OrderContextType>({
	products: [],
	add: () => void 0,
});

export const OrderProvider: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	const [products, setProducts] = useState<Product[]>([]);

	const add = (product: Product): void => {
		setProducts((state) => [...state, product]);
	};

	return (
		<OrderContext.Provider
			value={{
				products,
				add,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
