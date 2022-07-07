// const root = document.getElementById("root");

// const div = document.createElement("div");

// div.classList.add("virtual-div");
// div.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio quo facere vel molestiae ab quos. Dolorum animi corrupti soluta temporibus exercitationem aliquam, doloribus dicta provident similique debitis necessitatibus eius?"

// const div = `
//   <div class="virtual-div">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio quo facere vel molestiae ab quos. Dolorum animi corrupti soluta temporibus exercitationem aliquam, doloribus dicta provident similique debitis necessitatibus eius?
//   </div>
// `;

// root.insertAdjacentHTML("afterend", div);

// innerHTML
// outerHTML

// beforeBegin
// <target>
//   afterBegin
//   beforeEnd
// </target>
// afterEnd

// afterBegin
// afterEnd
// beforeBegin
// beforeEnd

// const makePar = (innerText) => {
//   const par = document.createElement("p");

//   par.classList.add("virtual-div");
//   par.innerText = innerText ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio quo facere vel molestiae ab quos. Dolorum animi corrupti soluta temporibus exercitationem aliquam, doloribus dicta provident similique debitis necessitatibus eius?"

//   return par;
// }

// const par = makePar();

// root.append(par, makePar(), makePar(), makePar(), par.cloneNode(true))

// const newPar = makePar("NEW CHILD");

// root.replaceChild(newPar, par);

// newPar.remove();

// root.append(newPar);
