import { randImg, randProduct } from "@ngneat/falso";
import { Product } from "../../domain/product";

export const PRODUCTS: Product[] = Array(10)
	.fill(null)
	.map(() => {
		const { price, ...product } = randProduct();

		return {
			...product,
			price: parseInt(price),
			image: randImg({ category: "tech" }),
		};
	});
