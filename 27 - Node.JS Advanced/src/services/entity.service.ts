import { v4 as uuid } from 'uuid';

export abstract class Entity {
	id: string

	constructor() {
		this.id = uuid().replaceAll('-', '');
	}
	
}