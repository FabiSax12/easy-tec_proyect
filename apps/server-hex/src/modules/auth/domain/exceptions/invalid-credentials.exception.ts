import { ApplicationException } from '@/shared/exceptions/application-exception';

/**
 * Exception thrown when authentication fails due to invalid credentials (e.g., wrong email/password).
 */
export class InvalidCredentialsException extends ApplicationException {
  constructor(message: string = 'Invalid credentials.') {
    super(message);
  }
}
