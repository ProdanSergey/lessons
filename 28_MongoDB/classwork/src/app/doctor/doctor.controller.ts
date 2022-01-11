import * as express from 'express';
import type {Request} from 'express';
import { DoctorService } from './doctor.service';
import { DoctorCreateBody, DoctorCreateParams } from './doctor.definition';
import { withHandler } from '../../decorators/with-handler.decorator';

const doctors = express.Router({ mergeParams: true });

const doctorService = new DoctorService();

doctors.post('/', withHandler<Request<DoctorCreateParams, any, DoctorCreateBody>>(
	async (req, res) => {
		const { facilityId } = req.params;
		const { firstName, lastName, spec } = req.body;
	
		const response = await doctorService.create(facilityId, firstName, lastName, spec);
	
		res.json(response)
	}
))

export { doctors };
