// const maxAge = new Date(
// 	new Date().setSeconds(new Date().getSeconds() + 10)
// ).toUTCString();

// console.log(maxAge);

// document.cookie = `toDelete=bar; path=/; max-age=${10}`;

// setTimeout(() => {
// 	document.cookie = `toDelete=bar; path=/; max-age=${-1}`;
// }, 4000);

// nasty-cats.com/top
// nasty-cats.com/top/200
// nasty-cats.com/250

// nasty-cats.com/

// document.cookie = `foo=bar`;
// document.cookie = `baz=dir`;

// const EatMyCookie = {
// 	getAllCookies() {
// 		return document.cookie.split(";").map((pair) => pair.trim());
// 	},

// 	getCookie(name) {
// 		for (const cookie of this.getAllCookies()) {
// 			const [cookieName] = cookie.split("=");

// 			if (cookieName === name) {
// 				return cookie;
// 			}
// 		}

// 		return null;
// 	},

// 	hasCookie(name) {
// 		return !!this.getCookie(name);
// 	},

// 	setCookie(name, value, options) {
// 		let cookie = [name, value].join("=");

// 		const allOptions = { path: "/", ...options };

// 		for (const tag of Object.keys(allOptions)) {
// 			cookie += `;${[tag, allOptions[tag]].join("=")}`;
// 		}

// 		document.cookie = cookie;
// 	},

// 	deleteCookie(name) {
// 		this.setCookie(name, "", { ["max-age"]: -1 });
// 	},

// 	countCookies() {
// 		return this.getAllCookies().length;
// 	},
// };

// console.log(EatMyCookie.countCookies());

// localStorage.setItem("LS", "CHECK");
// sessionStorage.setItem("SessionStorage", "CHECK");

const addTodo = document.forms["add-todo"];

class Store {
  getState(id) {
    const store = localStorage.getItem(id);

    if (!store) {
      const initStore = {};

      localStorage.setItem(id, JSON.stringify(initStore));
      return initStore;
    }

    return JSON.parse(store);
  }

  setState(id, entity) {
    const state = this.getState(id);

    localStorage.setItem(id, JSON.stringify({ ...state, [entity.id]: entity }));
  }
}

const renderTodo = (value) => {
  const para = document.createElement("p");
  para.textContent = value;

  document.body.append(para);
};

addTodo.addEventListener("submit", (e) => {
  e.preventDefault();

  const { todo, name } = e.target;

  const value = todo.value;

  new Store().setState(name, { id: new Date().toTimeString(), text: value });

  renderTodo(value);

  e.target.reset();
});

const preLoadTodo = (todoList) => {
  const state = new Store().getState(todoList.name);

  Object.values(state).forEach(({ text }) => renderTodo(text));
};

preLoadTodo(addTodo);
