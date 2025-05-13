import { ApplicationException } from '@/shared/exceptions/application-exception';

/**
 * Exception thrown when attempting to create a User with an email that already exists.
 * This is a specific business rule violation within the User domain.
 */
export class UserAlreadyExistsException extends ApplicationException {
  /**
   * The email address that caused the conflict.
   */
  public readonly email: string;

  /**
   * Creates an instance of UserAlreadyExistsException.
   * @param email - The email address that is already in use.
   */
  constructor(email: string) {
    const message = `User with email '${email}' already exists.`;
    super(message);
    this.email = email;
  }
}
