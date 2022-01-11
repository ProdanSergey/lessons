import * as fs from 'fs'
import { promisify } from 'util';
import { Todo } from '../../entities/todo.entity';
import { NotFoundError } from '../../utils/error.util';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const FILE_PATH = './todos.json';

type State = Todo[];

export const TodoService = class TodoService {
	async handleAdd(value: string): Promise<void> {
		const state = await this.getState();

		const todo = new Todo(value);

		state.push(todo);

		await this.setState(state);
	};

	async handleGet(value: string): Promise<Todo> {
		const state = await this.getState();

		const match = state.find((todo) => todo.id === value);

		if (!match) {
			throw new NotFoundError()
		}

		return match;
	};

	async handleList(filter?: boolean): Promise<State> {
		let state = await this.getState();

		if (filter !== undefined) {
			state = state.filter(todo => todo.completed === filter);
		}

		if (state.length < 1) {
			throw new NotFoundError();
		}

		return state;
	};

	async handleDelete(value: string): Promise<void> {
		const state = await this.getState();

		const filtered = state.filter(todo => todo.id !== value);

		if (filtered.length === state.length) {
			throw new NotFoundError();
		}

		await this.setState(filtered);
	};

	async handleUpdate(value: string, update: string | boolean): Promise<Todo> {
		const state = await this.getState();

		const match = state.findIndex(todo => todo.id === value);

		if (!match) {
			throw new NotFoundError();
		}

		switch (typeof update) {
			case 'boolean':
				state[match].completed = update
				break;
			default:
				state[match].text = update
		}

		await this.setState(state);

		return state[match];
	};

	private async getState(): Promise<State> {
		let data = '[]';
	
		try {
			data = await readFile(FILE_PATH, 'utf-8');
		} catch {
			await writeFile(FILE_PATH, data);
		} finally {
			return JSON.parse(data);
		}
	};
	
	private async setState(state: State): Promise<void> {
		try {
			await writeFile(FILE_PATH, JSON.stringify(state));
		} catch (error) {
			throw error;
		}
	};
}