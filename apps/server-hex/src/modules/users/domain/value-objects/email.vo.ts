export class Email {
  /**
   * The raw email address string.
   * @readonly
   */
  public readonly value: string;

  /**
   * Creates an instance of Email.
   * @param value - The email address string.
   * @throws Error if the email format is invalid.
   */
  constructor(value: string) {
    if (!this.isValid(value)) {
      throw new Error(`Invalid email format: ${value}`); // Usar excepción de dominio adecuada
    }
    this.value = value;
  }

  /**
   * Validates the format of an email address string.
   * @param email - The email string to validate.
   * @returns True if the email format is valid, false otherwise.
   * @private
   */
  private isValid(email: string): boolean {
    // Implementación básica de validación (usar regex más robusta en producción)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Compares two Email value objects for equality based on their value.
   * @param other - The other Email value object to compare.
   * @returns True if the email values are the same, false otherwise.
   */
  public equals(other: Email): boolean {
    if (!(other instanceof Email)) {
      return false;
    }
    return this.value === other.value;
  }

  /**
   * Returns the raw email address string.
   * This is often needed for serialization or interaction with external systems.
   */
  public toString(): string {
    return this.value;
  }
}
