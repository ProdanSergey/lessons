import { model, Schema, Types, Document } from "mongoose";
import { Doctor } from "./doctor.models";

const TOKEN = 'Appointment';

export interface IAppointment extends Document {
	userId: string;
	startAt: string;
	doctor: Types.ObjectId;
}

const schema = new Schema<IAppointment>({
	userId: {
		type: String,
		required: true
	},
	startAt: {
		type: String,
		required: [true, 'StartAt Required Error Message']
	},
	doctor: {
		type: Schema.Types.ObjectId,
		ref: Doctor
	}
});

export const Appointment = model<IAppointment>(TOKEN, schema);