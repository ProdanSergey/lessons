import * as express from 'express';
import type {Request, Response} from 'express';
import { AppointmentService } from './appointment.service';
import { AppointmentCreateBody, AppointmentCreateParams, AppointmentListParams, AppointmentFindParams, AppointmentDeleteParams} from './appointment.definition';
import { UnauthorizedError } from '../../definitions/error.definition';

const appointments = express.Router({ mergeParams: true });

const appointmentService = new AppointmentService();

appointments.post('/', (req: Request<AppointmentCreateParams, any, AppointmentCreateBody>, res: Response) => {
	const userId = req.user;

	if (!userId) {
		throw new UnauthorizedError();
	}

	const { facilityId, doctorId } = req.params;
	const { startAt } = req.body;

	const response = appointmentService.create(userId, facilityId, doctorId, startAt);

  res.json(response)
})

appointments.get('/:appointmentId', (req: Request<AppointmentFindParams>, res: Response) => {
	const userId = req.user;

	if (!userId) {
		throw new UnauthorizedError();
	}

	const { facilityId, doctorId, appointmentId } = req.params;

	const response = appointmentService.find(userId, facilityId, doctorId, appointmentId);

  res.json(response)
})

appointments.delete('/:appointmentId', (req: Request<AppointmentDeleteParams>, res: Response) => {
	const userId = req.user;

	if (!userId) {
		throw new UnauthorizedError();
	}

	const { facilityId, doctorId, appointmentId } = req.params;

	appointmentService.delete(userId, facilityId, doctorId, appointmentId);

  res.sendStatus(204)
})

appointments.get('/', (req: Request<AppointmentListParams>, res: Response) => {
	const userId = req.user;

	if (!userId) {
		throw new UnauthorizedError();
	}

	const { facilityId, doctorId } = req.params;

	const response = appointmentService.list(userId, facilityId, doctorId);

  res.json(response)
})

export { appointments };
