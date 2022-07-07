// const cocaCola = (() => {
// 	function CocaColaCompany(volume) {
// 		this.volume = volume;
// 	}

// 	CocaColaCompany.prototype.drink = function () {
// 		console.log("mmmm yammu");
// 		console.log("I drunk", this.volume);
// 	};

// 	return new CocaColaCompany(0.5);
// })();

// console.log(cocaCola.__proto__.constructor);

// const CocaColaCompany = cocaCola.__proto__.constructor;

// cocaCola.drink();

// const cocaCola = new CocaColaCompany(0.5);
// const fanta = new CocaColaCompany(1);
// const sprite = new CocaColaCompany(2);

// console.log(cocaCola.__proto__);

// cocaCola.drink();
// fanta.drink();
// sprite.drink();

// console.log(cocaCola.__proto__ === CocaColaCompany.prototype);

// cocaCola.volume = 50;
// cocaCola.drink();

// Object.setPrototypeOf(cocaCola, Object.prototype);

// const superMap = Object.create(Map.prototype);

// console.log(superMap);

// const dictionary = Object.create(null);

// console.log(dictionary);

// for (let key in cocaCola) {
// 	// eslint-disable-next-line no-prototype-builtins
// 	console.log(key, cocaCola.hasOwnProperty(key));
// }

// for (const key of Object.getOwnPropertyNames(cocaCola)) {
// 	console.log(key);
// }

function CocaColaCompany(volume) {
  CocaColaCompany.invocations += 1;

  this.volume = volume;
}

CocaColaCompany.prototype.establish = "1800";

CocaColaCompany.prototype.drink = function () {
  console.log("mmmm yammu");
  console.log("I drunk", this.volume);
};

CocaColaCompany.version = "1.1.0";
CocaColaCompany.invocations = 0;

CocaColaCompany.info = function () {
  return {
    version: CocaColaCompany.version,
    author: "John Doe",
    invocations: CocaColaCompany.invocations,
  };
};

const cocaCola = new CocaColaCompany(0.5);
const fanta = new CocaColaCompany(1.5);

const info = CocaColaCompany.info();

// console.log(info);

// const cocaCola = new CocaColaCompany(0.5);
// const fanta = new CocaColaCompany(1.5);
// const fake = { volume: 0.5 };

// const makeASip = (anyDrink) => {
// 	if (anyDrink instanceof CocaColaCompany) {
// 		anyDrink.drink();
// 	} else throw new Error("Its a fake");
// };

// makeASip(cocaCola);
// makeASip(fake);

function Gadget(params) {
  Object.assign(this, params);
}

Gadget.prototype.heathCheck = function () {
  console.log(`run a heath check.... on ${this.title}`);

  setTimeout(() => {
    console.log(`Done.... Health on ${this.title} 100%`);
  }, 1000);
};
Gadget.prototype.install = function () {
  console.log(
    `Ask your ${this.vendor} for a help`,
    "I have no specific app to get a software"
  );
};

Object.defineProperty(Gadget.prototype, "title", {
  get: function () {
    return this.vendor + " " + this.model;
  },
  set: function (value) {
    const [vendor, model] = value.split(" ");

    this.vendor = vendor;
    this.model = model;

    // eslint-disable-next-line no-setter-return
    return true;
  },
});

function Laptop(params) {
  Gadget.call(this, params);
  this.type = "notebooks";
}

Laptop.prototype = Object.create(Gadget.prototype);
Laptop.prototype.constructor = Laptop;

function Desktop(params) {
  Gadget.call(this, params);
  this.type = "desktop";
}

Desktop.prototype = Object.create(Gadget.prototype);
Desktop.prototype.constructor = Desktop;

function Smartphone(params) {
  Gadget.call(this, params);
  this.type = "smartphone";
}

Smartphone.prototype = Object.create(Gadget.prototype);
Smartphone.prototype.constructor = Smartphone;

Smartphone.prototype.install = function () {
  console.log(`Install from Google Play Market`);
};

const lenovo = new Laptop({
  vendor: "Lenovo",
  model: "XPSF23-123",
  version: "10.11.1",
});

const dell = new Desktop({
  vendor: "Dell",
  model: "BGs-2Dx",
  version: "5.11.1",
});

const xiaomy = new Smartphone({
  vendor: "Xioamy",
  model: "i10",
  version: "8.11.1",
});

lenovo.install();

dell.install();

xiaomy.install();
