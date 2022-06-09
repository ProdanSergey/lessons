import { Appointment } from "../../domain/appointment";
import { CLI, CLICommand } from "../../ports/cli";
import { Logger } from "../../ports/logger";
import { Store } from "../../ports/store";
import { CreateAppointmentCommand } from "../../commands/CreateAppointmentCommand";
import { GetAppointmentCommand } from "../../commands/GetAppointmentCommand";

export class AppointmentController {
	constructor(
		private readonly nodeCliOutput: Logger,
		private readonly nodeCli: CLI,
		private readonly store: Store
	) {}

	async process() {
		const command = this.nodeCli.getCommand();

		if (command === CLICommand.CREATE) {
			const appointment = await new CreateAppointmentCommand(
				this.store
			).execute();

			const record = Appointment.toRecord(appointment);

			this.nodeCliOutput.print(`[${record.id}] created`);
		}

		if (command === CLICommand.GET) {
			const { id } = this.nodeCli.getQuery();

			const appointment = await new GetAppointmentCommand(this.store).execute({
				id,
			});

			const record = Appointment.toRecord(appointment);

			this.nodeCliOutput.print(`[${record.id}] found`);
		}
	}
}
