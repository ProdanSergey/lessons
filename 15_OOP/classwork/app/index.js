// SOLID;

// const MyFunnyLogger = function (logger) {
// 	this.logger = logger;
// };

// MyFunnyLogger.prototype.doSomething = function () {
// 	this.logger('Do sometthing');

// 	db();
// };

// const myFLogger1 = new MyFunnyLogger(console.log);
// const myFLogger2 = new MyFunnyLogger(console.error);
// const myFLogger3 = new MyFunnyLogger(console.warn);

// const MySmartLogger = function (logger) {
// 	this.logger = logger;
// };

// MyFunnyLogger.prototype.doSomething = function () {
// 	this.logger('Do sometthing');

// 	alert('')
// };

// const mySLogger1 = new MySmartLogger(console.log);
// const mySLogger2 = new MySmartLogger(console.error);
// const mySLogger3 = new MySmartLogger(console.warn);

// const makeARequest = (url, logger) => {
// 	request(url);

// 	logger.doSomething('Success');
// };

// S - Single Responsobility
// O - Open/Close Principle
// L - Barbara Liskov Sabstitution
// I - Interface segregation
// D - Dependency Inversion

const bmwM5 = BMWFactory(BMW_MODELS.M5);

bmwM5.turnOn();
bmwM5.forward();
bmwM5.right();
bmwM5.right();
bmwM5.forward();
bmwM5.left();
bmwM5.left();
bmwM5.forward();
bmwM5.turnOff();
bmwM5.report(console.log);

const teslaModelX = TeslaFactory(TESLA_MODELS.MODEL_X);

teslaModelX.drive(["l", "f", "f", "r", "f", "l", "f"]);

teslaModelX.report(console.log);
