import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
@Catch()
export class CompanyExceptionsFilter implements ExceptionFilter {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	catch(exception: any, host: ArgumentsHost): any {
		const response = host.switchToHttp().getResponse();
		return response
			.status(exception.type || HttpStatus.INTERNAL_SERVER_ERROR)
			.send(exception.message || 'Internal server error');
	}
}
