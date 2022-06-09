import { FileStore } from "./adapters/file-store";
import { CLIOutput } from "./adapters/logger";
import { NodeCLI } from "./adapters/node-cli";
import { AppointmentController } from "./app/appointment/controller";

const bootstrap = async () => {
	const nodeCliInput = new NodeCLI();
	const nodeCliOutput = new CLIOutput();
	const store = new FileStore();

	await store.init();

	const handleError = (error: unknown) => {
		if (error instanceof Error) {
			nodeCliOutput.alert(error.message, error.name);
		} else {
			nodeCliOutput.alert(String(error));
		}

		process.exit(1);
	};

	process.on("uncaughtException", handleError);
	process.on("unhandledRejection", handleError);

	await new AppointmentController(nodeCliOutput, nodeCliInput, store).process();
};

bootstrap();
