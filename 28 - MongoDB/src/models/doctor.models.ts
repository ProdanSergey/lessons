import { Document, model, Schema, Types } from 'mongoose';
import { Facility } from '../models/facility.models';

export enum DoctorSpec {
	THERAPIST = 1,
	SURGEON = 2
}

const TOKEN = 'Doctor';

export interface IDoctor extends Document {
	firstName: string;
	lastName: string;
	spec: DoctorSpec;
	facility: Types.ObjectId;
}

const schema = new Schema<IDoctor>({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	spec: {
		type: Number,
		enum: {
			values: [1, 2],
			message: `{VALUE} is not available put something from a list: ${[1, 2]}`
		},
		required: true,
		
	},
	facility: {
		type: Schema.Types.ObjectId,
		ref: Facility
	}
});

export const Doctor = model<IDoctor>(TOKEN, schema);