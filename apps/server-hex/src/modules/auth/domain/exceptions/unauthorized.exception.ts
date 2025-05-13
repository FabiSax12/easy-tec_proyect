import { ApplicationException } from '@/shared/exceptions/application-exception';

/**
 * Exception thrown when a user is not authorized to perform a specific action.
 * This indicates a permission issue after successful authentication.
 */
export class UnauthorizedException extends ApplicationException {
  constructor(message: string = 'Unauthorized to perform this action.') {
    super(message);
  }
}
