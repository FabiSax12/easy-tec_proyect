import { ApplicationException } from '@/shared/exceptions/application-exception';

/**
 * Exception thrown when an authentication token is invalid, expired, or malformed.
 */
export class TokenInvalidOrExpiredException extends ApplicationException {
  constructor(message: string = 'Authentication token is invalid or expired.') {
    super(message);
  }
}
