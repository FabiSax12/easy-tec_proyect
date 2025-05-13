/**
 * Represents a single schedule block (day and time range).
 * This is a Value Object defined by its properties.
 */
export class Schedule {
  /**
   * The day of the week for the schedule.
   * @readonly
   */
  public readonly day: string;

  /**
   * The start time of the schedule (e.g., "08:00").
   * @readonly
   */
  public readonly start: string;

  /**
   * The end time of the schedule (e.g., "09:30").
   * @readonly
   */
  public readonly end: string;

  /**
   * Creates an instance of Schedule.
   * @param props - The properties to initialize the Schedule VO.
   * @param props.day - The day of the week.
   * @param props.start - The start time string.
   * @param props.end - The end time string.
   * @throws Error if props are invalid (e.g., times not in expected format).
   */
  constructor(props: { day: string; start: string; end: string }) {
    // Basic validation examples (can be more complex if needed)
    if (!props.day || !props.start || !props.end) {
      throw new Error("Schedule properties cannot be empty.");
    }
    // Optional: Regex validation for time format
    // if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(props.start)) {
    //     throw new Error(`Invalid start time format: ${props.start}`);
    // }

    this.day = props.day;
    this.start = props.start;
    this.end = props.end;
  }

  /**
   * Compares two Schedule value objects for equality based on their properties.
   * @param other - The other Schedule value object to compare.
   * @returns True if all properties are the same, false otherwise.
   */
  public equals(other: Schedule): boolean {
    if (!(other instanceof Schedule)) {
      return false;
    }
    return this.day === other.day &&
      this.start === other.start &&
      this.end === other.end;
  }

  /**
   * Returns a string representation of the schedule.
   */
  public toString(): string {
    return `${this.day} ${this.start}-${this.end}`;
  }

  // Optional: Add domain logic for comparison or operations
  // public isEarlierThan(other: Schedule): boolean { ... }
  // public overlapsWith(other: Schedule): boolean { ... }
}
