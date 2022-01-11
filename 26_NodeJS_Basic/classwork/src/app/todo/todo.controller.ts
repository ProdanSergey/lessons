import { BadRequestError } from '../../utils/error.util';
import { Logger } from '../../utils/logger.utils';
import { TodoService } from './todo.service';

export const TodoController = class TodoController {
	constructor(
		private readonly service = new TodoService(),
		private readonly logger = new Logger()
	) {};

	async handle(argv: string): Promise<void> {
		try {
			const [option, value] = argv.split('=');
			const [methodName, methodArg] = option.split(':');

			switch (methodName) {
				case 'add':
					await this.service.handleAdd(value);

					this.logger.notify('Success');
					break;
				case 'get':
					switch (methodArg) {
						case '!': {
							const todos = await this.service.handleList();

							this.logger.notify(`All todos:`, todos);
							break;
						}
						case '+': {
							const todos = await this.service.handleList(true);

							this.logger.notify(`All todos:`, todos);
							break;
						}
						case '-': {
							const todos = await this.service.handleList(false);

							this.logger.notify(`All todos:`, todos);
							break;
						}
						default:
							const todo = await this.service.handleGet(value);

							this.logger.notify(`Todo is found:`, todo);
						}
					break;
				case 'delete': {
					await this.service.handleDelete(value);

					this.logger.notify('Deleted successfully')
					break;
				}
				case 'update': {
					let update: string | boolean;
					
					switch (value) {
						case '+':
							update = true;
							break;
						case '-':
							update = false
							break;
					
						default:
							update = value;
					}
					const todo = await this.service.handleUpdate(methodArg, update);

					this.logger.notify('Updated successfully', todo);

					break;
				}
				default:
					throw new BadRequestError();
			}
		} catch (error) {
			this.logger.warn(error as Error);
		}
	}
}
