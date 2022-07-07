class AutoPilot extends Device {
  constructor() {
    super(DEVICE_TYPES.AUTO_PILOT);
  }

  drive(commands) {
    this.vehicle.turnOn();
    for (const command of commands) {
      switch (command) {
        case "l":
          this.vehicle.left();
          break;
        case "r":
          this.vehicle.right();
          break;
        case "f":
          this.vehicle.forward();
          break;
        default:
          break;
      }
    }
    this.vehicle.turnOff();
  }
}
