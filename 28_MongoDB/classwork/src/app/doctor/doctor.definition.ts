import { DoctorSpec } from '../../models/doctor.models';

export interface DoctorCreateBody {
	firstName: string;
	lastName: string;
	spec: DoctorSpec;
}

export interface DoctorCreateParams {
	facilityId: string;
}