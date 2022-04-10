class Framework {
  static mount(root, component) {
    root.replaceChildren(component.render())
  }
}

class BaseComponent {
  constructor(tagName, props, options = {}) {
    this.element = this.create(tagName);
    this.props = props;

    const { children, attributes, styles } = options;

    this.styles = this.setStyles(styles);
    this.attributes = this.setAttributes(attributes);
    this.children = this.setChildren(children);
  }

  create(tagName) {
    return document.createElement(tagName);
  }

  setStyles(styles = {}) {
    for (const key of Object.keys(styles)) {
      this.element.style[key] = styles[key];
    }

    return this.element.style;
  }

  setAttributes(attributes = {}) {
    for (const key of Object.keys(attributes)) {
      this.element[key] = attributes[key]
    }

    return this.element.attributes;
  }

  setChildren(children = []) {
    for (const child of children) {
      if (typeof child === "string") {
        this.element.insertAdjacentHTML("afterbegin", child)
      } else this.element.append(child.render());
    }

    return this.element.children;
  }

  render() {
    return this.element;
  }
}

class ImageComponent extends BaseComponent {
  constructor(props) {
    const { src } = props;

    super("img", props, {
      attributes: {
        src,
        title: "slider image"
      }
    });
  }
}

class SliderItemComponent extends BaseComponent {
  constructor(props) {
    const { item } = props;

    super("div", props, {
      attributes: {
        className: ["sc-slider__item"]
      },
      children: [item]
    });
  }
}

class SliderControlComponent extends BaseComponent {
  constructor(props) {
    const { icon, position, onClick } = props;

    super("button", props, {
      styles: {
        [position]: 0
      },
      attributes: {
        onclick: onClick,
        className: ["sc-slider__control"]
      },
      children: [icon]
    });
  }
}

class SliderTrackComponent extends BaseComponent {
  constructor(props) {
    const { items } = props;

    super("div", props, {
      attributes: {
        className: ["sc-slider__track"]
      },
      children: items.map(src => new SliderItemComponent({
        item: new ImageComponent({ src })
      }))
    })
  }
}

const SliderComponent = (() => {
  const parseOffset = (track, px = false) => {
    const offset = parseInt(track.style.marginLeft) || 0;
    
    return px ? CSS.px(offset) : offset;
  };

  const isAtFirst = (track) => {
    return parseOffset(track) === 0;
  }

  const isAtLast = (track, length) => {
    return parseOffset(track) === track.clientWidth * (length - 1) * -1;
  }

  class SliderComponent extends BaseComponent {
    constructor(props) {
      const { items } = props;

      super("div", props, {
        attributes: {
          className: ["sc-slider"]
        },
        children: [
          new SliderControlComponent({ icon: "<", position: "left", onClick: () => {
            this.prev()
          } }),
          new SliderTrackComponent({ items }),
          new SliderControlComponent({ icon: ">", position: "right", onClick: () => {
            this.next()
          } }),
        ]
      });    

      this.track = this.element.querySelector(".sc-slider__track");
    }

    to(nth) {
      debugger
      if (nth < 1) nth = 1;
      if (nth > this.props.items.length) nth = this.props.items.length;

      this.track.style.marginLeft = CSS.px((this.track.clientWidth * (nth - 1)) * -1);
    }
  
    toFirst() {
      this.track.style.marginLeft = 0;
    }
  
    prev() {
      const prev = () => {
        this.track.style.marginLeft = parseOffset(this.track, true).add(CSS.px(this.track.clientWidth));
      }
  
      isAtFirst(this.track) ? this.toLast() : prev();
    }
  
    toLast() {
      this.track.style.marginLeft = CSS.px(this.track.clientWidth * (this.props.items.length - 1) * -1);
    }
  
    next() {
      const next = () => {
        this.track.style.marginLeft = parseOffset(this.track, true).sub(CSS.px(this.track.clientWidth));
      }
  
      isAtLast(this.track, this.props.items.length) ? this.toFirst() : next();
    }
  }

  return SliderComponent;
})()

const images = [
  "https://picsum.photos/640/480?random=1",
  "https://picsum.photos/640/480?random=2",
  "https://picsum.photos/640/480?random=3",
  "https://picsum.photos/640/480?random=4",
  "https://picsum.photos/640/480?random=5",
  "https://picsum.photos/640/480?random=6",
];

const slider = new SliderComponent({ items: images });

Framework.mount(document.getElementById("root"), slider);