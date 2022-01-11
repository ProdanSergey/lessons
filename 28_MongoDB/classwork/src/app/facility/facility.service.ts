import { NotFoundError } from "../../definitions/error.definition";
import { Facility } from "../../models/facility.models";

export class FacilityService {
	async create(name: string) {
		const facility = new Facility({
			name
		});

		return facility.save();
	}

	async find(facilityId: string) {
		const facility = await Facility.findById(facilityId).exec();

		if (!facility) {
			throw new NotFoundError();
		}

		return facility;
	}

	async list() {
		const facilities = await Facility.find().exec();

		return facilities;
	}
}