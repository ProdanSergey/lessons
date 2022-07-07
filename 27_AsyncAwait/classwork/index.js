// function () {

// };

// function Name() {

// };

// const Name = function() {

// };

// const Name = function Name() {

// };

// const RecursiveFunction = function F() {
//   F();
// }

// const entity = {
//   fly: function () {

//   }
// }

// const Constructor = function Constructor {

// }

// const ArrowFunction = () => {};

// class MyClass {
//   constructor() {

//   }

//   fly() {

//   }
// }

// (() => {

// })() IIEE

// const generator = function* () {

// }

// const asyncFunction = async () => {
//   return resolve()

//   throw reject();
// };

// const sleep = (timeout) => {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, timeout);
// 	});
// };

// const sleepAndReject = (timeout) => {
// 	return new Promise((_, reject) => {
// 		setTimeout(reject, timeout);
// 	});
// };

// const sayHello = async () => {
// 	await sleep(5000);

// 	console.log("Hello World");
// };

// const dontSayHello = async () => {
// 	try {
// 		await sleepAndReject(5000);
// 	} catch (error) {
// 		console.log("Psss, Error");

// 		throw new Error("Sleep Returns Error");
// 	} finally {
// 		console.log("Finally");
// 	}
// };

// (async () => {
// 	try {
// 		await dontSayHello();
// 		console.log("OK");
// 	} catch (error) {
// 		console.warn("ERROR");
// 	} finally {
// 		console.log("DONE");
// 	}
// })();

/*** Async Await ***/

// const runAsyncApp = (() => {
// 	const request = (body, error) => {
// 		const promise = new Promise((resolve, reject) => {
// 			const requestId = uuid();
// 			console.log(`[Request: ${requestId} ] Start`);

// 			setTimeout(() => {
// 				console.log(`[Request: ${requestId}] Finish`);

// 				error ? reject(error) : resolve(body);
// 			}, 1000);
// 		});

// 		return promise;
// 	};

// 	const getArtist = () => {
// 		return request(Artist());
// 	};

// 	const getArtistTop10Albums = () => {
// 		return request(build(Album(), 10));
// 	};

// 	const getArtistComments = () => {
// 		return request(build(EntityComment(), 3));
// 	};

// 	return async () => {
// 		const artist = await getArtist();

// 		const [top10Albums, comments] = await Promise.allSettled([
// 			getArtistTop10Albums(),
// 			getArtistComments(),
// 		]);
// 	};
// })();

// const fileForm = document.forms["file-form"];

// const RenderImage = (src) => {
// 	const image = document.createElement("img");

// 	image.width = 250;
// 	image.height = 250;

// 	image.src = src;

// 	return image;
// };

// const ReadMyImage = (file) => {
// 	return new Promise((resolve, reject) => {
// 		if (!file) {
// 			reject(new Error("File Not Found"));
// 		}

// 		const reader = new FileReader();

// 		reader.onload = (event) => {
// 			resolve(event.target.result);
// 		};

// 		reader.onerror = () => {
// 			reject(new Error("Corrupted file"));
// 		};

// 		reader.readAsDataURL(file);
// 	});
// };

// const HandleFileInput = (input) => {
// 	input.addEventListener("change", async (event) => {
// 		const file = event.target.files[0];

// 		const url = await ReadMyImage(file);

// 		const image = RenderImage(url);

// 		input.form.append(image);
// 	});
// };

// HandleFileInput(fileForm.file);

// const sleep = (timeout) => {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, timeout);
// 	});
// };

// class ReadLoudly {
// 	constructor(text) {
// 		this.words = text.split(" ");
// 	}

// 	async *[Symbol.asyncIterator]() {
// 		for (const word of this.words) {
// 			yield await this.#textToSpeech(word);
// 		}
// 	}

// 	async #textToSpeech(word) {
// 		await sleep(1000);

// 		return `[SPEAK] ${word}`;
// 	}
// }

// const textToRead =
// 	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero eos tempora minima iusto aspernatur maiores eaque laboriosam ad facilis ipsum illo, harum voluptas veritatis et impedit omnis natus labore.";

// const Siri = new ReadLoudly(textToRead);

// // const iterator = Siri[Symbol.iterator]();

// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());

// (async () => {
// 	for await (const word of Siri) {
// 		console.log(word);
// 	}
// })();

const sleep = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const verifyClient = async () => {
  await sleep(2000);

  return Boolean(getRandomIntInclusive(0, 1));
};

const clients = [
  { id: 1, name: "Bob" },
  { id: 2, name: "John" },
];

const getClient = async (id) => {
  await sleep(2000);

  return clients.find((client) => client.id === id);
};

const App = () => {
  const ids = [1, 2];

  const all = async () => {
    const start = new Date().getTime();
    const clients = await Promise.all(ids.map((id) => getClient(id)));

    const clientResults = await Promise.all(
      clients.map((client) => verifyClient(client))
    );

    console.log(clientResults, new Date().getTime() - start);
  };

  const each = async () => {
    const start = new Date().getTime();

    for (const id of [1, 2]) {
      const client = await getClient(id);

      const result = await verifyClient(client);

      console.log(result);
    }

    console.log(new Date().getTime() - start);
  };

  all();

  each();
};

App();
