import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongoose from 'mongoose';

import { facilities } from './app/facility/facility.controller';
import { doctors } from './app/doctor/doctor.controller';
import { appointments } from './app/appointment/appointment.controller';
import { userMiddleware } from './middlewares/user.middleware';
import { errorHandlingMiddleware } from './middlewares/error-handling.middleware';

dotenv.config();

const connect = async () => {
	const DB_NAME = process.env.DB_NAME;
	const DB_USER = process.env.DB_USER;
	const DB_PASSWORD = process.env.DB_PASSWORD;

	await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.h2lxe.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);
};

connect();

const app = express();

// Before Request
app.use(express.json());
app.use(userMiddleware);

// Resources
app.use('/facilities', facilities);
app.use('/facilities/:facilityId/doctors', doctors);
app.use('/facilities/:facilityId/doctors/:doctorId/appointments', appointments);

// Before Response
app.use(errorHandlingMiddleware);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});