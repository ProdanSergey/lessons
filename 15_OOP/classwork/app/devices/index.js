const DEVICE_TYPES = {
  GPS: "gps",
  COMPUTER: "computer",
  AUTO_PILOT: "autopilot",
};

class Device {
  constructor(type) {
    this.type = type;
  }

  set(vehicle) {
    this.vehicle = vehicle;

    return this;
  }
}
