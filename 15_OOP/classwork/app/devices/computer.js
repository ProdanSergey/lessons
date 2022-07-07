const Computer = (() => {
  class Computer extends Device {
    constructor() {
      super(DEVICE_TYPES.COMPUTER);

      this.subscribers = new WeakMap();
      /*
			{ 
				[turnLeft Event]: [fn, fn, fn, fn]
			}
			*/
    }

    produce(event) {
      const allSubs = this.subscribers.get(event.constructor);

      if (allSubs) {
        for (const handler of allSubs) {
          handler(this.vehicle);
        }
      }
    }

    subscribe(eventType, handler) {
      const allSubs = this.subscribers.get(eventType) ?? []; // [fn, fn]

      this.subscribers.set(eventType, [...allSubs, handler]);
    }
  }

  return Computer;
})();
