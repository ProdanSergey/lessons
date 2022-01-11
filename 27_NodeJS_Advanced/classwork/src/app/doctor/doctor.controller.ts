import * as express from 'express';
import type {Request, Response} from 'express';
import { DoctorService } from './doctor.service';
import { DoctorCreateBody, DoctorCreateParams } from './doctor.definition';

const doctors = express.Router({ mergeParams: true });

const doctorService = new DoctorService();

doctors.post('/', (req: Request<DoctorCreateParams, any, DoctorCreateBody>, res: Response) => {
	const { facilityId } = req.params;
	const { firstName, lastName, spec } = req.body;

	const response = doctorService.create(facilityId, firstName, lastName, spec);

  res.json(response)
})

export { doctors };
