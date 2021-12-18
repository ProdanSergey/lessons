import dayjs from "dayjs";

export class Logger {
	print(...messages) {
		console.log('[LOG]:', dayjs().format(), ...messages);
	}
}