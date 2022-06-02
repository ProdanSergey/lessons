// const welcomeMessage = "TypeScript Initialized";

// const mapMessageToLogEntry = (message: string): string => {
// 	return `[${new Date().toISOString()}]` + " " + message;
// };

// const println = (message: string): void => {
// 	console.log(mapMessageToLogEntry(message));
// };

// println(welcomeMessage);

// const sum = (x: number, y: number): number => {
// 	return x + y;
// };

// const mult = (x: number, y: number): number => {
// 	return x * y;
// };

// const calculator = (
// 	x: number,
// 	y: number,
// 	operation: (firstArg: number, secondArg: number) => number
// ): void => {
// 	console.log(operation(x, y));
// };

// calculator(5, 5, (x, y) => x ** y);

// const doubleEach = (entries: number[]): Array<number> => {
// 	return entries.map((value) => value * 2);
// };

// console.log(doubleEach([1, 2, 3, 4]));

// type State = {
// 	state: number;
// };

// type StateUpdater = (newState: number) => void;

// const useState = (initialValue: number): [State, StateUpdater] => {
// 	const current = { state: initialValue };

// 	const setState = (newState: number) => {
// 		current.state = newState;
// 	};

// 	return [current, setState];
// };

// const [myState, setState] = useState(5);

// console.log(myState.state);

// setState(50);

// console.log(myState.state);

// setState(100);

// console.log(myState.state);

// interface Rectangle {
// 	width: number;
// 	height: number;
// }

// interface Rectangle {
// 	border: number;
// }

// type Circle = {
// 	radius: number;
// 	x: number;
// 	y: number;
// 	measureDiameter: () => number;
// };

// type Ellipse = Circle & Rectangle;
// // interface Elipse extends Circle, Rectangle {}

// type CircleDiameter = Circle["measureDiameter"];

// const measureDiameter: CircleDiameter = () => {
// 	return 55;
// };

// const measureRectangle = (rectangle: Rectangle): void => {
// 	console.log(rectangle.width * rectangle.height);
// };

// const measureCircle = (circle: Circle): void => {
// 	console.log(circle.x * circle.y);
// 	console.log(circle.radius);
// };

// const rectangle = { height: 25, width: 10 };

// const circle: Circle = { x: 25, y: 10, radius: 25, measureDiameter };

// const ellipse: Ellipse = {
// 	width: 22,
// 	height: 55,
// 	radius: 24,
// 	x: 15,
// 	y: 22,
// 	measureDiameter,
// 	border: 55,
// };

// const measureShape = (shape: Rectangle | Circle) => {
// 	// if ((shape as Circle).radius !== undefined) {
// 	// 	measureCircle(shape as Circle);
// 	// } else {
// 	// 	measureRectangle(shape as Rectangle);
// 	// }

// 	if ("radius" in shape) {
// 		measureCircle(shape);
// 	} else {
// 		measureRectangle(shape);
// 	}
// };

// measureShape(circle);

// const getEllipseValue = (ellipse: Ellipse, key: keyof Ellipse) => {
// 	console.log(ellipse[key]);
// };

// getEllipseValue(ellipse, "border");

// const showDimensions = (ellipse: Ellipse, key: "width" | "height") => {
// 	return ellipse[key];
// };

// showDimensions(ellipse, "height");

import { BOOKS } from "./books";
import { Markets } from "./markets";

import type { MarketStore } from "./markets";

const getAvailableBooksForUser = (market: Markets) => {
	return BOOKS[market];
};

const usaMarketStore: MarketStore = {
	address: "sdsds",
	phone: 5552,
};

console.log(getAvailableBooksForUser(Markets.FRANCE));
