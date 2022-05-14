/* eslint-disable no-undef */

// Intro

window.addEventListener("unhandledrejection", (event) => {
	event.preventDefault();

	console.warn("[unhandledrejection]", event);
});

const calculateAge = (year, month, day) => {
	console.log("Magic...", year, month, day);

	return 33;
};

const renderSportsmen = () => {
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id: new Date().getTime(),
				firstName: "John",
				lastName: "Doe",
				active: true,
			});
		}, 1000);
	})
		.then((user) => {
			if (!user.active) {
				throw new Error("Sportsman is not active");
			}

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([
						user,
						{
							year: 1999,
							month: 2,
							day: 21,
						},
					]);
				}, 1000);
			});
		})
		.then(([user, { year, month, day }]) => {
			return [user, calculateAge(year, month, day)];
		})
		.then(([user, age]) => {
			console.log(
				"Sportsman bio:",
				user.firstName + " " + user.lastName,
				"and age is:",
				age
			);
		})
		.catch((err) => console.warn(err));
};

const build = (entity, count) => {
	return new Array(count).fill(null).map(() => entity);
};

/*** Promise ***/

const runPromiseApp = (() => {
	const request = (body, error) => {
		const promise = new Promise((resolve, reject) => {
			const requestId = uuid();
			console.log(`[Request: ${requestId} ] Start`);

			setTimeout(() => {
				console.log(`[Request: ${requestId}] Finish`);

				error ? reject(error) : resolve(body);
			}, 1000);
		});

		return promise;
	};

	const getArtist = () => {
		return request(Artist());
	};

	const getArtistTop10Albums = () => {
		return request(build(Album(), 10));
	};

	const getArtistComments = () => {
		return request(build(EntityComment(), 3));
	};

	return () => {
		getArtist()
			.then((artist) => {
				console.log(artist);

				return Promise.allSettled([
					getArtistTop10Albums(),
					getArtistComments(),
				]);
			})
			.then((comments) => {
				console.log(comments);
			});
	};
})();

// runPromiseApp();

/*** Error First Callback ***/

const runCallbackApp = (() => {
	const request = (callback, body, error = null) => {
		const requestId = uuid();

		console.log(`[Request: ${requestId} ] Start`);
		setTimeout(() => {
			console.log(`[Request: ${requestId}] Finish`);

			callback(error, body);
		}, 1000);
	};

	const getArtist = (cb) => {
		request(cb, Artist());
	};

	const getArtistTop10Albums = (cb) => {
		request(cb, build(Album(), 10), new Error("Not found"));
	};

	const getArtistComments = (cb) => {
		request(cb, build(EntityComment(), 3));
	};

	return () => {
		getArtist((error, artist) => {
			if (!error) {
				console.log(artist);

				getArtistTop10Albums((error, top10Albums) => {
					if (!error) {
						console.log(top10Albums);

						getArtistComments((error, comments) => {
							if (!error) {
								console.log(comments);
							} else {
								console.warn(error);
							}
						});
					} else {
						console.warn(error);
					}
				});
			} else {
				console.warn(error);
			}
		});
	};
})();

// runCallbackApp();

/*** Async Await ***/

const runAsyncApp = (() => {
	const request = (body, error) => {
		const promise = new Promise((resolve, reject) => {
			const requestId = uuid();
			console.log(`[Request: ${requestId} ] Start`);

			setTimeout(() => {
				console.log(`[Request: ${requestId}] Finish`);

				error ? reject(error) : resolve(body);
			}, 1000);
		});

		return promise;
	};

	const getArtist = () => {
		return request(Artist());
	};

	const getArtistTop10Albums = () => {
		return request(build(Album(), 10));
	};

	const getArtistComments = () => {
		return request(build(EntityComment(), 3));
	};

	return async () => {
		const artist = await getArtist();

		const [top10Albums, comments] = await Promise.allSettled([
			getArtistTop10Albums(),
			getArtistComments(),
		]);
	};
})();

runAsyncApp();
