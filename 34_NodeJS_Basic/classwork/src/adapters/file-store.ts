import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { Store, State } from "../ports/store";

const filePath = resolve(__dirname, "../../store/store.json");

export class FileStore implements Store {
	async init() {
		try {
			await this.readFile();
		} catch (error) {
			await this.writeFile("{}");
		}
	}

	async getState(): Promise<State> {
		const state = await this.readFile();

		return JSON.parse(state);
	}

	async setState(nextState: State): Promise<void> {
		const prevState = await this.getState();

		await this.writeFile(JSON.stringify({ ...prevState, ...nextState }));
	}

	private async readFile(): Promise<string> {
		return readFile(filePath, "utf-8");
	}

	private async writeFile(content: string): Promise<void> {
		return writeFile(filePath, content);
	}
}
