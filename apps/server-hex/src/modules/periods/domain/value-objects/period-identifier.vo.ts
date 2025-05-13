import { PeriodType } from '@/core/domain/types/period-type.enum';

/**
 * Represents the unique identifier combination for a Period.
 * Value object defined by its type, number, and year.
 */
export class PeriodIdentifier {
  public readonly type: PeriodType;
  public readonly number: number;
  public readonly year: number;

  constructor(type: PeriodType, number: number, year: number) {
    // Add validation if needed (e.g., number > 0, year > 0)
    this.type = type;
    this.number = number;
    this.year = year;
  }

  public equals(other: PeriodIdentifier): boolean {
    if (!(other instanceof PeriodIdentifier)) {
      return false;
    }
    return this.type === other.type &&
      this.number === other.number &&
      this.year === other.year;
  }

  public toString(): string {
    return `${this.type}-${this.number}-${this.year}`;
  }
}
