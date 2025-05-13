import { ApplicationException } from '@/shared/exceptions/application-exception';
import { Email } from '../value-objects/email.vo';

/**
 * Exception thrown when attempting to create a User with an email that already exists.
 * This is a specific business rule violation within the User domain.
 */
export class UserAlreadyExistsException extends ApplicationException {
  /**
   * The email address that caused the conflict.
   */
  public readonly email: Email;

  /**
   * Creates an instance of UserAlreadyExistsException.
   * @param email - The email address that is already in use.
   */
  constructor(email: Email) {
    const message = `User with email '${email}' already exists.`;
    super(message);
    this.email = email;
  }
}
