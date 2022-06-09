import { Appointment } from "../domain/appointment";

export type State = Record<string, Appointment>;

export interface Store {
	getState(): Promise<State>;
	setState(nextState: State): Promise<void>;
}
