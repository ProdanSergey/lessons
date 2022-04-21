const BaseComponent = (() => {
  const { isFunction, isObject } = FRAMEWORK_UTILS;

  return class BaseComponent {
    constructor(props = {}) {
      this.props = props;
  
      const proxy = new Proxy(this, {
        get(self, key) {
          if (key === "render") {
            return () => {
              const render = self.render();
  
              self.element?.replaceWith(render);
  
              self.element = render;
  
              return render;
            };
          }
  
          return Reflect.get(self, key);
        },
        set(self, key, value) {
          if (key === "state") {
            Reflect.set(self, key, value);
  
            proxy.render();
  
            return true;
          }
  
          return Reflect.set(self, key, value);
        },
      });
  
      return proxy;
    }
  
    setState(update) {
      if (!isObject(this.state)) {
        throw new DOMException("State must be defined to update it");
      }
  
      this.state = { ...this.state, ...(isFunction(update) ? update(this.state) : update) };
    }
  }
})();
