import * as express from 'express';
import type {Request, Response} from 'express';
import { FacilityService } from './facility.service';
import { FacilityCreateBody, FacilityFindParams } from './facility.definition';

const facilities = express.Router();

const facilityService = new FacilityService();

facilities.post('/', async (req: Request<any, any, FacilityCreateBody>, res: Response) => {
	const { name } = req.body;

	const response = await facilityService.create(name);

  res.json(response)
})

facilities.get('/:facilityId', async (req: Request<FacilityFindParams>, res: Response) => {
	const { facilityId } = req.params;

	const response = await facilityService.find(facilityId);

  res.json(response)
})

facilities.get('/', async (_req: Request, res: Response) => {
	const response = await facilityService.list();

  res.json(response)
})

export { facilities };
