// const auth = (() => {
// 	const accounts = archiveFabric([
// 		new Account('admin@exmaple.com', 'admin')
// 	]);

// 	return {
// 		signIn() {
// 			const email = STDIN.string();
// 			const password = STDIN.string();

// 			if (accounts.has(email)) {
// 				return accounts.find((user) => user.email === email && user.password === password);
// 			}

// 			if (confirm('wanna try again?')) {
// 				return this.signIn();
// 			}

// 			if (confirm('wanna reg?')) {
// 				return this.signUp();
// 			}

// 			return null;
// 		},

// 		signUp() {
// 			const email = STDIN.string();
// 			const password = STDIN.string();

// 			const user = new Account(email, password);

// 			accounts.add(user);

// 			return user;
// 		},

// 		signOut() {
// 			return null;
// 		}
// 	};
// })();

// const app = (() => {
// 	let account = null;

// 	return {
// 		getOperationsByUserPermission(permission) {
// 			let OPERATIONS = [];

// 			if (permission.includes('WRITE')) {
// 				OPERATIONS = [
// 					// ... only write
// 				];
// 			}

// 			if (permission.includes('READ')) {
// 				OPERATIONS = [
// 					// ... only read
// 				];
// 			}

// 			return OPERATIONS;
// 		},

// 		getMethodName(permission) {
// 			const OPERATIONS = getOperationsByUserPermission(permission);

// 			const message = OPERATIONS.map(([, title], index) => `${index} - ${title}`);

// 			const index = STDIN.number(message, (value) => {
// 				!Object.keys(OPERATIONS).includes(value);
// 			});

// 			return OPERATIONS[index][1];
// 		},

// 		doOperation(name) {
// 			if (name in this) {
// 				this[name]();
// 			}
// 		},

// 		run() {
// 			account = AUTH.signIn();

// 			const methodName = this.getMethodName(account.permission);

// 			this.doOperation(methodName);
// 		}
// 	};
// })();

// const archiveFabric = (intial = []) => {
// 	const entities = intial;

// 	return {
// 		add(index) {
// 			initialValue.push(index);
// 		}
// 	};
// };

// Web Storage

// http://browsercookielimits.iain.guru/

// Local Storage

// localStorage.setItem('hello', 'world');

// localStorage.removeItem('hello');

// Session Storage

// sessionStorage.setItem('hello', 'world');

// const source = {
// 	name: 'hello',
// 	value: 'world'
// };

// const str = JSON.stringify(source);

// console.log(str);

// const target = JSON.parse(str);

// console.log(target);

// console.log(JSON.stringify(source) === JSON.stringify(target)); 

// localStorage.setItem('mySource', JSON.stringify(source));

// console.log(JSON.parse(localStorage.getItem('mySource')));