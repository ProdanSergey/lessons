const createElement = (tagName, attributes = {}, children = []) => {
  const element = document.createElement(tagName);

  Object.keys(attributes).forEach((key) => {
    if (key in element) {
      element[key] = attributes[key];
      return;
    }

    element.setAttribute(key, attributes[key]);
  });

  children?.forEach((child) => element.append(child));

  return element;
};

const root = document.getElementById("root");

const offset = createElement("p");
const client = createElement("p");
const page = createElement("p");
const _screen = createElement("p");

const tooltip = createElement(
  "p",
  {
    className: "tooltip",
  },
  ["I know what you've done last summer"]
);

const updateOutput = (event) => {
  offset.replaceChildren(
    `offsetX: ${event.offsetX}, offsetY: ${event.offsetY}`
  );
  client.replaceChildren(
    `clientX: ${event.clientX}, clientY: ${event.clientY}`
  );
  page.replaceChildren(`pageX: ${event.pageX}, pageY: ${event.pageY}`);
  _screen.replaceChildren(
    `screenX: ${event.screenX}, screenY: ${event.screenY}`
  );
};

const moveTooltip = (event) => {
  const { clientX, clientY } = event;

  tooltip.style.left = CSS.px(clientX).toString();
  tooltip.style.top = CSS.px(clientY).toString();
};

root.append(tooltip);

document.addEventListener("mousemove", (event) => {
  updateOutput(event);
  moveTooltip(event);
});

const output = createElement("output", {}, [offset, client, page, _screen]);

root.append(output);

console.log(tooltip.getBoundingClientRect());

window.addEventListener("resize", (event) => {
  const { innerWidth, innerHeight } = window;
  console.log(innerWidth, innerHeight);
});

window.addEventListener("scroll", (event) => {
  const { scrollX, scrollY } = window;
  console.log(scrollX, scrollY);
});
