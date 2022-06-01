import { println } from "./utils";

const testToken = "TypeScript Ready And Load";

println(testToken);

type Shape = {
	x: number;
	y: number;
	toString: () => string;
};

const unknown: Shape = {
	x: 10,
	y: 10,
	toString() {
		return this.x + " : " + this.y;
	},
};

const measure = (shape: Shape) => {
	console.log(shape.toString());
};

measure(unknown);
