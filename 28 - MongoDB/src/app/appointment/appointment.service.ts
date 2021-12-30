import { Appointment } from "../../entities/appointment.entity";
import { AppointmentRepository } from "../../repositories/appointment.repository";
import { DoctorRepository } from "../../repositories/doctor.repository";

export class AppointmentService {
	constructor(
		private readonly doctorRepository = new DoctorRepository(),
		private readonly appointmentRepository = new AppointmentRepository()
	) {

	}

	create(userId: string, facilityId: string, doctorId: string, startAt: string) {
		const doctor = this.doctorRepository.findOneOrFail({ id: doctorId, facility: { id: facilityId }});

		const appointment = new Appointment();

		appointment.startAt = startAt;
		appointment.userId = userId;
		appointment.doctor = doctor;

		return this.appointmentRepository.insert(appointment);
	}

	find(userId: string, facilityId: string, doctorId: string, appointmentId: string) {
		return this.appointmentRepository.findOneOrFail({ 
			id: appointmentId, userId, doctor: { id: doctorId, facility: { id: facilityId } }
		})
	}

	delete(userId: string, facilityId: string, doctorId: string, appointmentId: string) {
		const appointment = this.appointmentRepository.findOneOrFail({ 
			id: appointmentId, userId, doctor: { id: doctorId, facility: { id: facilityId } }
		})

		this.appointmentRepository.delete(appointment.id);
	}

	list(userId: string, facilityId: string, doctorId: string) {
		return this.appointmentRepository.findMany({ userId, doctor: { id: doctorId, facility: { id: facilityId } } });
	}
}