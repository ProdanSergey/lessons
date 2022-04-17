// const pref = document.querySelector("#pref");

// pref.addEventListener("click", (event) => {
//   console.log("target", event.target);
//   console.log("current target", event.currentTarget);
// });

// const targets = document.querySelectorAll(".target");

// for (const target of targets) {
//   target.addEventListener("click", (event) => {
//     console.log("capturing");

//     console.log("is bubbling enabled:", event.bubbles);

//     console.log('eventPhase', event.eventPhase);
//     console.log('target', event.target);
//     console.log('currentTarget', event.currentTarget);

//     console.log('******************');
//   }, { capture: true });
// }

// for (const target of targets) {
//   target.addEventListener("click", (event) => {
//     console.log("bubbling");

//     console.log('eventPhase', event.eventPhase);
//     console.log('target', event.target);
//     console.log('currentTarget', event.currentTarget);

//     console.log('******************');
//   });
// }

// const pref = document.querySelector("#pref");

// pref.addEventListener("submit", (event) => {
//   console.log("button clicked");

//   console.log(event.cancelable)

//   event.preventDefault();
// });

// pref.addEventListener("click", () => {
//   console.log("sibling")
// });

// window.addEventListener("scroll", (event) => {
//   console.log("window scrolling");

//   event.preventDefault();

//   console.log(event.cancelable)

//   console.log(event);
// });

class Table {
  count = 0;

  constructor(table) {
    this.table = table;

    this.render();
    this.listen();
  }

  isPopulated({ innerText }) {
    return Boolean(innerText);
  }

  mark = ({ target }) => {
    console.log("x", Number(target.dataset.x), "y", Number(target.dataset.y));

    if (this.isPopulated(target)) {
      this.count--;
      target.innerText = "";
    } else {
      this.count++
      target.innerText = "X";
    }

    console.log(this.count);
  };

  renderRow() {
    const element = document.createElement("div");

    element.classList.add("table__row");

    return element;
  }

  renderCell(x, y) {
    const element = document.createElement("div");

    element.dataset.x = x;
    element.dataset.y = y;
 
    element.classList.add("table__cell");

    return element;
  }

  listen() {
    this.table.addEventListener("click", this.mark);
  }

  render() {
    const rows = [];

    for (let y = 0; y < 10; y++) {
      const row = this.renderRow();
      
      for (let x = 0; x < 10; x++) {
        const cell = this.renderCell(x, y);

        row.append(cell);
      }

      rows.push(row);
    }

    const table = this.table.cloneNode();

    table.append(...rows);

    this.table.replaceWith(table);

    this.table = table;
  }
}

const table = new Table(document.querySelector(".table"));

console.log(table);