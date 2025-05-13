/**
 * Represents an authentication token (e.g., JWT).
 * This is a Value Object defined by its value and potentially expiry.
 */
export class AuthToken {
  /**
   * The token string itself.
   * @readonly
   */
  public readonly value: string;

  /**
   * The expiry date of the token (optional).
   * @readonly
   */
  public readonly expiresAt?: Date;

  /**
   * Creates an instance of AuthToken.
   * @param value - The token string.
   * @param expiresAt - The optional expiry date.
   * @throws Error if the token value is empty.
   */
  constructor(value: string, expiresAt?: Date) {
    if (!value || value.trim() === '') {
      throw new Error('Auth token value cannot be empty.');
    }
    this.value = value;
    this.expiresAt = expiresAt;
  }

  /**
   * Checks if the token has expired.
   * @returns True if the token has an expiry date and it's in the past, false otherwise.
   */
  public isExpired(): boolean {
    if (!this.expiresAt) {
      return false; // Token does not expire
    }
    return this.expiresAt <= new Date();
  }
}
