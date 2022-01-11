import { Entity } from "../services/entity.service";
import { Doctor } from "./doctor.entity";

export class Appointment extends Entity {
	startAt?: string;
	userId?: string;
	doctor?: Doctor;
}