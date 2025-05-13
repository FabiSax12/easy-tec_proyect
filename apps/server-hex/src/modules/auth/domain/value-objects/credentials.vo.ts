import { Email } from '@/modules/users/domain/value-objects/email.vo';

/**
 * Represents the credentials used for authentication (email/username and password).
 * This is a Value Object defined by its properties.
 */
export class Credentials {
  /**
   * The user's email address or username.
   * @readonly
   */
  public readonly email: Email;

  /**
   * The user's raw password.
   * @readonly
   */
  public readonly password: string;

  /**
   * Creates an instance of Credentials.
   * @param identifier - The user's email or username.
   * @param password - The user's raw password.
   * @throws Error if credentials are empty.
   */
  constructor(identifier: string, password: string) {
    if (!identifier || identifier.trim() === '' || !password || password.trim() === '') {
      throw new Error('Credentials cannot be empty.');
    }
    this.email = typeof identifier === 'string' ? new Email(identifier) : identifier;
    this.password = password;
  }
}
