import { ApplicationException } from '@/shared/exceptions/application-exception';

/**
 * Exception thrown when authentication is required but the user is not authenticated.
 * This is typically handled by guards in the infrastructure layer, but can originate from domain if logic requires it.
 */
export class AuthenticationRequiredException extends ApplicationException {
  constructor(message: string = 'Authentication is required to access this resource.') {
    super(message);
  }
}
