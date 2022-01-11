export interface AppointmentCreateBody {
	startAt: string;
}

export interface AppointmentCreateParams {
	facilityId: string;
	doctorId: string;
}

export interface AppointmentListParams extends AppointmentCreateParams {};

export interface AppointmentFindParams extends AppointmentCreateParams {
	appointmentId: string;
}

export interface AppointmentDeleteParams extends AppointmentCreateParams {
	appointmentId: string;
}