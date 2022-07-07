const Framework = (() => {
  const { isFunction, forEach } = FRAMEWORK_UTILS;

  const prepareNode = (node) => {
    if (node instanceof BaseComponent) {
      return node.render();
    }

    if (isFunction(node)) {
      return prepareNode(node());
    }

    return node;
  };

  return class Framework {
    static create(tagName, attributes, children) {
      const element = document.createElement(tagName);

      forEach(attributes, (key) => {
        if (key.startsWith("@")) {
          element.addEventListener(key.slice(1), attributes[key]);
          return;
        }

        if (key in element) {
          element[key] = attributes[key];
          return;
        }

        if (key.startsWith("data")) {
          element.dataset[key.split("-")[1]] = attributes[key];
          return;
        }

        element.setAttribute(key, attributes[key]);
      });

      forEach(children, (child) => {
        const tree = prepareNode(child);

        tree && element.append(tree);
      });

      return element;
    }

    static mount(root, component) {
      root.replaceChildren(prepareNode(component));
    }
  };
})();
