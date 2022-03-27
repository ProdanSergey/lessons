const GPS = (() => {
	const NORTH = "north";
	const WEST = "west";
	const SOUTH = "south";
	const EAST = "east";

	const COMPASS = {
		[NORTH]: {
			left: WEST,
			right: EAST,
		},
		[WEST]: {
			left: SOUTH,
			right: NORTH,
		},
		[SOUTH]: {
			left: EAST,
			right: WEST,
		},
		[EAST]: {
			left: NORTH,
			right: SOUTH,
		},
	};

	class GPS extends Device {
		constructor() {
			super(DEVICE_TYPES.GPS);

			this.pointer = NORTH;
		}

		set(vehicle) {
			vehicle.computer.subscribe(TurnLeft, () => this.turnLeft());
			vehicle.computer.subscribe(TurnRight, this.turnRight.bind(this));

			return super.set(vehicle);
		}

		turnLeft() {
			this.pointer = COMPASS[this.pointer].left;
			this.vehicle.journal.for(this).report(`New direction: ${this.pointer}`);
		}

		turnRight() {
			this.pointer = COMPASS[this.pointer].right;
			this.vehicle.journal.for(this).report(`New direction: ${this.pointer}`);
		}
	}

	return GPS;
})();
