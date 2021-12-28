import { Entity } from "../services/entity.service";
import { Facility } from "./facility.entity";

export enum DoctorSpec {
	THERAPIST = 1,
	SURGEON = 2
}

export class Doctor extends Entity {
	firstName?: string
	lastName?: string
	spec?: DoctorSpec
	facility?: Facility
}