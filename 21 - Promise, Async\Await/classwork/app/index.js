function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


const fakeRequestError = () => {
	const random = getRandomIntInclusive(1, 100);

	if (random >= 50) {
		return new Error(`Bad Request: ${new Date()}`);
	}

	return null;
};


// error-first callback

// const getUsers = (cb) => {
// 	const USER = [
// 		{id: 1, name: 'Bob'},
// 		{id: 2, name: 'Andy'},
// 		{id: 3, name: 'Peter'}
// 	];

// 	setTimeout(() => {
// 		cb(null, USER);
// 	}, 2000);
// };

// const getRepos = (cb) => {
// 	const REPOS = [
// 		{id: 1, userId: 1, name: 'JS Basics'},
// 		{id: 2, userId: 1, name: 'CSS Basics'},
// 		{id: 1, userId: 2, name: 'React'},
// 	];

// 	setTimeout(() => {
// 		cb(null, REPOS);
// 	}, 2000);
// };

// const getAllReposOfUserById = (userId, cb) => {
// 	getUsers((err, users) => {
// 		if (err) {
// 			cb(err);

// 			return;
// 		}

// 		const user = users.find((user) => user.id === userId);

// 		if (!user) {
// 			cb(new Error('User was not found'));

// 			return;
// 		}

// 		getRepos((err, repos) => {
// 			if (err) {
// 				cb(err);

// 				return;
// 			}

// 			const userRepos = repos.filter(repo => repo.userId === user.id);

// 			if (!user) {
// 				cb(new Error('No repos for this user'));
				
// 				return;
// 			}

// 			cb(null, userRepos);
// 		});
// 	});
// };

// getAllReposOfUserById(1, (err, value) => {
// 	if (err) {
// 		console.error(err);
// 	} else {
// 		console.log(value);
// 	}
// });

// const request = new Promise((resolve, reject) => {
// 	const err = fakeRequestError();


// 	setTimeout(() => {
// 		if (err) {
// 			reject(err);
// 		}
		
// 		resolve('users');
// 	}, 2000);
// });

// request
// 	.then(
// 		data => {
// 			console.log(data);

// 			return new Promise((resolve) => setTimeout(() => resolve('usersRepos'), 2000));
// 		}
// 	)
// 	.then(
// 		data => {
// 			console.log(data);
// 		}
// 	)
// 	.catch(err => console.error(err));
	
// const getUsers = () => {
// 	const USERS = [
// 		{id: 1, name: 'Bob'},
// 		{id: 2, name: 'Andy'},
// 		{id: 3, name: 'Peter'}
// 	];

// 	const err = fakeRequestError();

// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (err) {
// 				reject(err);
// 			}
// 			resolve(USERS);
// 		}, 2000);
// 	});
// };

// const getRepos = () => {
// 	const REPOS = [
// 		{id: 1, userId: 1, name: 'JS Basics'},
// 		{id: 2, userId: 1, name: 'CSS Basics'},
// 		{id: 1, userId: 2, name: 'React'},
// 	];

// 	const err = fakeRequestError();

// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (err) {
// 				reject(err);
// 			}
// 			resolve(REPOS);
// 		}, 2000);
// 	});
// };

// const logger = {
// 	send(log) {
// 		console.log(log);
// 	}
// };

// getUsers()
// 	.then(users => {
// 		const user = users.find((user) => user.id === 1);

// 		if (!user) {
// 			throw new Error('User was not found');
// 		}

// 		return user;
// 	})
// 	.then(user => {
// 		return getRepos().then(repos => {
// 			const userRepos = repos.filter(repo => repo.userId === 1);
	
// 			if (userRepos.length < 1) {
// 				throw new Error('No repos for this user');
// 			}
	
// 			return userRepos;
// 		});
// 	})
// 	.then(console.log)
// 	.catch(console.error)
// 	.finally(() => {
// 		logger.send(`Request for user Repositories at: ${new Date()}`);
// 	});

// Promise.resolve
// Promise.reject

// Promise.all
// Promise.allSettled

// Promise.any
// Promise.race

// const parent = Promise.resolve('parent');

// const allRequests = Promise.race([
// 	getUsers(),
// 	getRepos()
// ]);

// console.log(allRequests);

// allRequests.then(
// 	firstFullfilled => console.log(firstFullfilled)
// ).catch(err => {
// 	console.error(err);
// });

const getAsyncRandom = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(getRandomIntInclusive(1, 100));
		}, 2000);
	});
};

const asyncRandoms = [
	getAsyncRandom(),
	getAsyncRandom(),
	getAsyncRandom(),
	getAsyncRandom(),
	getAsyncRandom(),
	getAsyncRandom(),
];

// let sum = 0;

// ES2017 Async/Await

const getAsyncSum = async () => {
	try {
		const sum = (await Promise.all(asyncRandoms)).reduce((sum, current) => {
			console.log(current);

			return sum += current;
		}, 0);

		
		return sum;
	} catch (err) {
		console.error(err);
	}	
};

const result = getAsyncSum().then(data => console.log(data));