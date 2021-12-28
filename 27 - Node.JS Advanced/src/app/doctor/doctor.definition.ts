import { DoctorSpec } from '../../entities/doctor.entity';

export interface DoctorCreateBody {
	firstName: string;
	lastName: string;
	spec: DoctorSpec;
}

export interface DoctorCreateParams {
	facilityId: string;
}