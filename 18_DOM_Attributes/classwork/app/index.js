// const makeInvisible = (target) => {
//   if (target instanceof HTMLElement) {
//     target.hidden = true;
//   }
// };

// makeInvisible(document.body)

// const heading = document.body.querySelector(".app-dialog__header h2")

class DOMError extends Error {};

class BaseComponent {
  constructor(container, props = {}) {
    if (!(container instanceof HTMLElement)) {
      throw new DOMError('Container not found');
    }

    this.container = container;
    this.props = props;
  }
}

class TabsComponent extends BaseComponent {
  constructor(...args) {
    super(...args);

    this.state = { activeIndex: 0 };

    const header = this.container.querySelector(".sc-tabs-actions");

    if (header instanceof HTMLElement) {
      this.initHeader(header);
    }

    const body = this.container.querySelector(".sc-tabs-regions");

    if (body instanceof HTMLElement) {
      this.initBody(body);
    }
  }

  initHeader({ children }) {
    this.header =  children;

    for (const action of this.header) {
      const index = this.indexOf(this.header, action);

      action.dataset.index = index;

      this.setActiveHeader(action);

      action.onclick = this.handleActionClick.bind(this, action);
      action.style.cursor = "pointer";
      action.setAttribute("aria-labelledby", `tab-${index}`);
    }
  }

  handleActionClick(item) {
    this.state.activeIndex = Number(item.dataset.index);

    this.forEach(this.header[0], (item) => {
      this.setActiveHeader(item);
    });

    this.forEach(this.body[0], (item) => {
      this.setActiveRegion(item);
    });
  }

  setActiveHeader(item) {
    const className = "sc-tabs-active";

    if (this.state.activeIndex === Number(item.dataset.index)) {
      item.classList.add(className)
    } else {
      item.classList.remove(className);
    }
  }

  initBody({ children }) {
    this.body = children;

    for (const region of this.body) {
      const index = this.indexOf(this.body, region);

      region.dataset.index = index;

      this.setActiveRegion(region);

      region.id = `tab-${index}`
      region.setAttribute("role", "region");
      region.setAttribute("aria-label", `purple tab`)
      
    }
  }

  setActiveRegion(item) {
    item.hidden = this.state.activeIndex !== Number(item.dataset.index);
  }

  indexOf(children, item) {
    return Array.from(children).indexOf(item);
  }

  forEach(element, onElement) {
    const iterate = (element) => {
      if (!element) return;
      onElement(element);
      iterate(element.nextElementSibling);
    };

    iterate(element);
  }
}

const tabs = new TabsComponent(document.querySelector(".app-tabs"), {
  onReject: () => {

  },
  onSubmit: () => {

  },
});

onclick // Когда курсор мышки кликнул по элементу
onmouseover // Когда курсор мышки пересек границу элемента
onmouseleave // Когда курсор мышки покинул границу элемента