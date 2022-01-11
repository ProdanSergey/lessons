import * as dotenv from 'dotenv';
import * as express from 'express';

import { facilities } from './app/facility/facility.controller';
import { doctors } from './app/doctor/doctor.controller';
import { appointments } from './app/appointment/appointment.controller';
import { userMiddleware } from './middlewares/user.middleware';
import { errorHandlingMiddleware } from './middlewares/error-handling.middleware';

dotenv.config();

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