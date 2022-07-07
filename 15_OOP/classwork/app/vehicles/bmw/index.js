class BMW extends Vehicle {
  constructor(metadata, computer, gps) {
    super({ vendor: "BMW", ...metadata }, computer, gps);
  }
}
