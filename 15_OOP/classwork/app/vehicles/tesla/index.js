class Tesla extends Vehicle {
	constructor(metadata, computer, gps, autopilot) {
		super({ vendor: "Tesla", ...metadata }, computer, gps, autopilot);
	}

	plug(computer, gps, autopilot) {
		super.plug(computer, gps);
		this.autopilot = autopilot.set(this);
	}

	drive(commands) {
		this.autopilot.drive(commands);
	}
}
