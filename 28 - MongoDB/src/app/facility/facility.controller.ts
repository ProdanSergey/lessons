import * as express from 'express';
import type {Request, Response} from 'express';
import { FacilityService } from './facility.service';
import { FacilityCreateBody } from './facility.definition';

const facilities = express.Router();

const facilityService = new FacilityService();

facilities.post('/', (req: Request<any, any, FacilityCreateBody>, res: Response) => {
	const { name } = req.body;

	const response = facilityService.create(name);

  res.json(response)
})

export { facilities };
