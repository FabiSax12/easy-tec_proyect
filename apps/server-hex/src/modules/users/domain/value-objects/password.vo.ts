// Nota: La validación de fortaleza y el hashing ocurren FUERA de este VO.
// Este VO representa una CONTRASEÑA HASHEADA válida.

/**
 * Represents a hashed password value object.
 * Encapsulates the hashed password string and ensures it's not empty.
 * Equality is based on the hashed string value.
 */
export class Password {
  /**
   * The hashed password string.
   * @readonly
   */
  public readonly value: string;

  /**
   * Creates an instance of Password.
   * @param value - The hashed password string.
   * @throws Error if the provided value is an empty string.
   */
  constructor(value: string) {
    if (!value || value.trim() === '') {
      throw new Error('Password value cannot be empty.');
    }
    this.value = value;
  }

  /**
   * Compares two Password value objects for equality based on their hashed value.
   * @param other - The other Password value object to compare.
   * @returns True if the hashed password values are the same, false otherwise.
   */
  public equals(other: Password): boolean {
    if (!(other instanceof Password)) {
      return false;
    }
    return this.value === other.value;
  }

  /**
   * Returns the hashed password string.
   * Needed for persistence or interaction with hashing services.
   */
  public toString(): string {
    return this.value;
  }
}
