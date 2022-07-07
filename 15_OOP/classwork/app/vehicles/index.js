const Vehicle = (() => {
  class Journal {
    constructor(storage = [], target = null, metadata = null) {
      this.storage = storage;
      this.target = target;
      this.metadata = metadata;
    }

    with(metadata) {
      return new Journal(this.storage, this.target, metadata);
    }

    for(target) {
      return new Journal(this.storage, target);
    }

    report(event) {
      this.storage.push({
        message: event,
        ...this.metadata,
        target: this.target,
      });
    }
  }

  class Vehicle {
    version = 1;

    constructor(metadata, computer, gps, ...devices) {
      this.journal = new Journal().for(this);
      this.metadata = metadata;

      this.plug(computer, gps, ...devices);
    }

    plug(computer, gps) {
      this.computer = computer.set(this);
      this.gps = gps.set(this);
    }

    turnOn() {
      this.journal.with(this.metadata).report("Starts engine");
    }

    turnOff() {
      this.journal.with(this.metadata).report("Stops engine");
    }

    forward() {
      this.journal.with(this.metadata).report("Moves forward");
    }

    left() {
      this.journal.with(this.metadata).report("Moves to left");
      this.computer.produce(new TurnLeft());
    }

    right() {
      this.journal.with(this.metadata).report("Moves to right");
      this.computer.produce(new TurnRight());
    }

    report(logger) {
      logger(this.journal.storage);
    }
  }

  return Vehicle;
})();
