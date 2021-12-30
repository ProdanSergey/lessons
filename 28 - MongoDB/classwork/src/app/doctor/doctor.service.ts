
import { NotFoundError } from "../../definitions/error.definition";
import { DoctorSpec, Doctor } from "../../models/doctor.models";
import { Facility } from '../../models/facility.models';

export class DoctorService {
	async create(facilityId: string, firstName: string, lastName: string, spec: DoctorSpec) {
		const facility = await Facility.findById(facilityId).exec();

		if (!facility) {
			throw new NotFoundError();
		}

		const doctor = new Doctor({
			firstName,
			lastName,
			spec,
			facility
		});

		const result = await doctor.save();

		return result.populate('facility');
	}
}