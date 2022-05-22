// const handleForm = (form) => {
// 	const output = form.cookieStorage;

// 	form.addEventListener("submit", (e) => {
// 		e.preventDefault();

// 		const expires = new Date(
// 			new Date().setHours(new Date().getHours() + 1)
// 		).toUTCString();

// 		console.log(expires);

// 		document.cookie = `foo=bar; expires=${expires}`;

// 		output.textContent = document.cookie;
// 	});

// 	form.addEventListener("reset", (e) => {
// 		e.preventDefault();

// 		document.cookie = `foo=bar; max-age=0`;

// 		output.textContent = document.cookie;
// 	});
// };

// handleForm(document.forms.storage);

// `foo=bar; max-age=0`;

// setCookie = (name, value) => {
//   document.cookie = `${encodeURIComponent(name)}`=`${encodeURIComponent(name)}`
// }

// getCookie = (name, value) => {
//   [].split() ...

//   for (const cookieName of cookies) {
//       if (decodeURIComponent(cookieName) === name) {
//         return value
//       }
//   }
// }

// setCookie("f=o=o", "bar");

// getCookie("f=o=o")

// const xhrRequest = (initRequest, callback) => {
// 	const { method, url, body } = initRequest;

// 	const xhr = new XMLHttpRequest();

// 	xhr.open(method, url);

// 	xhr.addEventListener("load", (event) => {
// 		const xhr = event.target;

// 		const { status, response, responseText } = xhr;

// 		if (status >= 200 && status < 400) {
// 			const contentType = xhr.getResponseHeader("content-type");

// 			if (contentType?.includes("application/json")) {
// 				callback(null, JSON.parse(response));
// 				return;
// 			}

// 			callback(null, responseText);
// 			return;
// 		}

// 		callback(new Error("Request Failed"), status);
// 	});

// 	xhr.addEventListener("error", (event) => {
// 		console.error(event);
// 	});

// 	if (body) {
// 		xhr.setRequestHeader("content-type", "application/json");

// 		xhr.send(JSON.stringify(body));
// 		return;
// 	}

// 	xhr.send();

//   return xhr;
// };

// const generateFetchError = (response) => {
// 	const error = new Error("Request Failed");
// 	error.statusCode = response.status;
// 	error.statusMessage = response.statusText;

// 	return error;
// };

// const defaultHeaders = new Headers();
// defaultHeaders.set("content-type", "application/json");

// const fetchRequest = async (url, initRequest) => {
// 	const fullUrls = new URL(url, "https://jsonplaceholder.typicode.com");

// 	if (initRequest.body) {
// 		initRequest.body = JSON.stringify(initRequest.body);
// 	}

// 	const response = await fetch(fullUrls, {
// 		headers: defaultHeaders,
// 		method: "GET",
//     signal: new AbortSignal()
// 		...initRequest,
// 	});

// 	if (response.ok) {
// 		const contentType = response.headers.get("content-type");

// 		if (contentType?.includes("application/json")) {
// 			return await response.json();
// 		}

// 		return await response.text();
// 	}

// 	throw generateFetchError(response);
// };

// // get 1 post
// xhrRequest(
// 	{
// 		url: "https://jsonplaceholder.typicode.com/posts/101",
// 		method: "GET",
// 	},
// 	(error, data) => {
// 		if (error) {
// 			console.error(error);
// 		}

// 		console.log("SINGLE POST", data);
// 	}
// );

// get posts list

// xhrRequest(
// 	{
// 		url: "https://jsonplaceholder.typicode.com/posts",
// 		method: "GET",
// 	},
// 	(error, data) => {
// 		if (error) {
// 			console.error(error);
// 		}

// 		console.log("POSTS LIST", data);
// 	}
// );

// update 1 post

// xhrRequest(
// 	{
// 		url: "https://jsonplaceholder.typicode.com/posts/1",
// 		method: "PUT",
// 		body: {
// 			id: 1,
// 			title: "NEW POST TITLE",
// 			body: "POST POST POST AND AGAIN POST",
// 			userId: 1,
// 		},
// 	},
// 	(error, data) => {
// 		if (error) {
// 			console.error(error);
// 		}

// 		xhrRequest(
// 			{
// 				url: "https://jsonplaceholder.typicode.com/posts",
// 				method: "GET",
// 			},
// 			(error, data) => {
// 				if (error) {
// 					console.error(error);
// 				}

// 				console.log("POSTS LIST", data);
// 			}
// 		);

// 		console.log("POSTS LIST", data);
// 	}
// );

// const app = async () => {
//   const signal = new AbortSignal();

// 	try {
// 		const post = await fetchRequest("posts", {
// 			method: "POST",
// body: {
// 	id: 101,
//   fakeId: 101, 102, 103, 104
// 	title: "NEW POST TITLE",
// 	body: "POST POST POST AND AGAIN POST",
// 	userId: 1,
// },
//       signal
// 		});

// 		console.log(post);
// 	} catch (error) {
// 		console.warn("POST FETCH ERROR", error.statusCode);
// 	}
// };

// app();

// const baseUrl = "https://jsonplaceholder.typicode.com/sudo/123";

// const url = new URL("posts?userId=1,2,3&accountId=1", baseUrl);

// console.log(url.origin);

// console.log(url.searchParams.get("userId"));

// url.searchParams.set("accountId", `${url.searchParams.get("accountId")},2`);

// console.log(url);

// const ac = new AbortController();

// setTimeout(() => {}, 1000, ac.signal)

// ac.abort();

const request = async () => {
	return fetch();
};

const getAllTodos = async () => {
	const todos = await request("url");

	return todos;
};

const getTodoById = async (id) => {};

const setTodoById = () => {};

const deleteTodoByIs = () => {};

const renderLoader = () => {
	const div = "<div>Loading...</div>";

	return div;
};

const renderTodoTask = (todo) => {
  const todoItem = `<div></div>`;

  const deleteIcon = `<button><p>-</p></button>`

 deleteIcon.addEventListener("click", () => {
  todoItem.dispatchEvent(new CustomEvent("todo:delete", {
    detail: todo.id,
    bubbles: true
  }))
 });

  todoItem.append(deleteIcon);
}

const renderTodoList = () => {
	const todoList = new TodoList();

  const findTodoByIdInTodoList = (id) => {
    return Array.from(todoList.children).find(item => item.id === id);
  };

  const makemakeItemDisabled = (item) => {
    item.classList.add("disabled");
  }

	todoList.addEventListener("submit", async (event) => {
		const newTodo = { id: 22, value: event.target.value };

		const skeleton = renderTodoSkeleton();

		todoList.append(skeleton);

		const todo = await setTodoById(newTodo);

		todoList.replaceChild(skeleton, renderTodoTask(todo));
	});

  todoList.addEventListener("todo:delete", async (event) => {
    const toDelete = event.target.detail;
    
    const item = findTodoByIdInTodoList(toDelete);

    makeItemDisabled(item);

    await deleteTodoByIs(toDelete);

    const item = findTodoByIdInTodoList(toDelete);

    item.remove();
  });
};

const bootstrap = async () => {
	document.body.append(renderLoader());
	const todoData = await getAllTodos();
	document.body.replaceChildren(renderTodoList(todoData));
};

bootstrap();
