
import { Doctor, DoctorSpec } from "../../entities/doctor.entity";
import { DoctorRepository } from "../../repositories/doctor.repository";
import { FacilityRepository } from "../../repositories/facility.repository";

export class DoctorService {
	constructor(
		private readonly facilityRepository = new FacilityRepository(),
		private readonly doctorRepository = new DoctorRepository()
	) {

	}

	create(facilityId: string, firstName: string, lastName: string, spec: DoctorSpec) {
		const facility = this.facilityRepository.findOneOrFail({ id: facilityId })

		const doctor = new Doctor();

		doctor.firstName = firstName;
		doctor.lastName = lastName;
		doctor.spec = spec;
		doctor.facility = facility;

		return this.doctorRepository.insert(doctor);
	}
}