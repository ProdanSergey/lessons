import * as express from 'express';
import type { Request } from 'express';
import { AppointmentService } from './appointment.service';
import { AppointmentCreateBody, AppointmentUpdateBody, AppointmentCreateParams, AppointmentUpdateParams,  AppointmentListParams, AppointmentFindParams, AppointmentDeleteParams} from './appointment.definition';
import { UnauthorizedError } from '../../definitions/error.definition';
import { withHandler } from '../../decorators/with-handler.decorator';

const appointments = express.Router({ mergeParams: true });

const appointmentService = new AppointmentService();

appointments.post('/', withHandler<Request<AppointmentCreateParams, any, AppointmentCreateBody>>(
	async (req, res) => {
		const userId = req.user;
	
		if (!userId) {
			throw new UnauthorizedError();
		}
	
		const { facilityId, doctorId } = req.params;
		const { startAt } = req.body;
	
		const response = await appointmentService.create(userId, facilityId, doctorId, startAt);
	
		res.json(response)
	}
))

appointments.put('/:appointmentId', withHandler<Request<AppointmentUpdateParams, any, AppointmentUpdateBody>>(
	async (req, res) => {
		const userId = req.user;
	
		if (!userId) {
			throw new UnauthorizedError();
		}
	
		const { facilityId, doctorId, appointmentId } = req.params;
		const { startAt } = req.body;
	
		const response = await appointmentService.update(userId, facilityId, doctorId, appointmentId, startAt);
	
		res.json(response)
	}
))

appointments.get('/:appointmentId', withHandler<Request<AppointmentFindParams>>(async (req, res) => {
	const userId = req.user;

	if (!userId) {
		throw new UnauthorizedError();
	}

	const { facilityId, doctorId, appointmentId } = req.params;

	const response = await appointmentService.find(userId, facilityId, doctorId, appointmentId);

	res.json(response)
}));

appointments.delete('/:appointmentId', withHandler<Request<AppointmentDeleteParams>>(async (req, res) => {
	const userId = req.user;

	if (!userId) {
		throw new UnauthorizedError();
	}

	const { facilityId, doctorId, appointmentId } = req.params;

	appointmentService.delete(userId, facilityId, doctorId, appointmentId);

  res.sendStatus(204)
}))

appointments.get('/', withHandler<Request<AppointmentListParams>>(async (req, res) => {
	const userId = req.user;

	if (!userId) {
		throw new UnauthorizedError();
	}

	const { facilityId, doctorId } = req.params;

	const response = appointmentService.list(userId, facilityId, doctorId);

  res.json(response)
}))

export { appointments };
