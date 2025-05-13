/**
 * Represents a percentage value between 0 and 100.
 */
export class Percentage {
  public readonly value: number;

  /**
   * Creates an instance of Percentage.
   * @param value - The percentage value.
   * @throws Error if the value is outside the 0-100 range.
   */
  constructor(value: number) {
    if (value < 0 || value > 100) {
      throw new Error(`Invalid percentage value: ${value}. Must be between 0 and 100.`);
    }
    this.value = value;
  }

  public equals(other: Percentage): boolean {
    if (!(other instanceof Percentage)) {
      return false;
    }
    return this.value === other.value;
  }

  public toNumber(): number {
    return this.value;
  }
}
