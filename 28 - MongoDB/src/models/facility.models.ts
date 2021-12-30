import { model, Schema, Document } from 'mongoose';

const TOKEN = 'Facility';

export interface IFacility extends Document {
	name: string;
};

const schema = new Schema<IFacility>({
	name: {
		type: String,
		required: true
	}
});

export const Facility = model<IFacility>(TOKEN, schema);