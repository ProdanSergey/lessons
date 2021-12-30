import type {Request, Response, NextFunction} from 'express';
import { NotFoundError, UnauthorizedError } from '../definitions/error.definition';

export const errorHandlingMiddleware = (err: Error, _req: Request , res: Response, next: NextFunction) => {
	if (err instanceof NotFoundError) {
		res.status(404)
	} else if (err instanceof UnauthorizedError) {
		res.status(401)
	} else {
		res.status(500)
	}

	res.json({
		status: res.statusCode,
		message: err.message
	})

	next();
}