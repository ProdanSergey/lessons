import { NotFoundError } from "../../definitions/error.definition";
import { Appointment } from "../../models/appointment.models";
import { Doctor } from '../../models/doctor.models';

export class AppointmentService {
	async create(userId: string, facilityId: string, doctorId: string, startAt: string) {
		const doctor = await Doctor.findOne({ _id: doctorId, facility: facilityId }).exec();

		if (!doctor) {
			throw new NotFoundError();
		};

		const appointment = new Appointment({
			userId,
			startAt,
			doctor
		});

		const result = await appointment.save();

		return result.populate({
			path: 'doctor',
			populate: { path: 'facility'}
		});
	}

	async update(userId: string, facilityId: string, doctorId: string, appointmentId: string, startAt: string) {
		const doctor = await Doctor.findOne({ _id: doctorId, facility: facilityId }).exec();

		if (!doctor) {
			throw new NotFoundError();
		};

		const appointment = await Appointment.findOne({ _id: appointmentId, userId, doctor: doctor.id });

		if (!appointment) {
			throw new NotFoundError();
		};

		const result = await Appointment.findByIdAndUpdate(appointment.id, { startAt }, { new: true });

		if (!result) {
			throw new NotFoundError();
		};

		return result.populate({
			path: 'doctor',
			populate: { path: 'facility'}
		})
	}

	async find(userId: string, facilityId: string, doctorId: string, appointmentId: string) {
		const doctor = await Doctor.findOne({ _id: doctorId, facility: facilityId }).exec();

		if (!doctor) {
			throw new NotFoundError();
		};

		const appointment = await Appointment.findOne({ _id: appointmentId, userId, doctor: doctor.id });

		if (!appointment) {
			throw new NotFoundError();
		};

		return appointment.populate({
			path: 'doctor',
			populate: { path: 'facility'}
		});
	}

	delete(_userId: string, _facilityId: string, _doctorId: string, _appointmentId: string) {
		// const appointment = this.appointmentRepository.findOneOrFail({ 
		// 	id: appointmentId, userId, doctor: { id: doctorId, facility: { id: facilityId } }
		// })

		// this.appointmentRepository.delete(appointment.id);
	}

	list(_userId: string, _facilityId: string, _doctorId: string) {
		// return this.appointmentRepository.findMany({ userId, doctor: { id: doctorId, facility: { id: facilityId } } });
	}
}