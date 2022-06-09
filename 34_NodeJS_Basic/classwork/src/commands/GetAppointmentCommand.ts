import { Appointment } from "../domain/appointment";
import { NotFoundError } from "../domain/error";
import { Store } from "../ports/store";

type GetAppointmentCommandParams = {
	id: string;
};

export class GetAppointmentCommand {
	constructor(private readonly store: Store) {}

	async execute({ id }: GetAppointmentCommandParams): Promise<Appointment> {
		const state = await this.store.getState();

		if (!state[id]) {
			throw new NotFoundError();
		}

		return state[id];
	}
}
