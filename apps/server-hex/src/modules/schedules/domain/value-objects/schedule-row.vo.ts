import { Schedule } from './schedule.vo';

/**
 * Represents a row in the simple schedule format received from the external service.
 * This is a Value Object defined by its properties.
 */
export class ScheduleRow {
  /** @readonly */
  public readonly id: string;
  /** @readonly */
  public readonly code: string;
  /** @readonly */
  public readonly subject: string;
  /** @readonly */
  public readonly group: number;
  /** @readonly */
  public readonly credits: number;
  /** @readonly */
  public readonly schedule: Schedule; // Single schedule as a nested VO
  /** @readonly */
  public readonly schedules: Schedule[]; // Multiple schedules as an array of VOs
  /** @readonly */
  public readonly classroom: string;
  /** @readonly */
  public readonly teacher: string;
  /** @readonly */
  public readonly teachers: string[];
  /** @readonly */
  public readonly totalSpaces: number;
  /** @readonly */
  public readonly typeOfSubject: string;
  /** @readonly */
  public readonly typeOfGroup: string;
  /** @readonly */
  public readonly reserved: number;

  /**
   * Creates an instance of ScheduleRow.
   * @param props - The properties to initialize the ScheduleRow VO.
   * @throws Error if required properties are missing or nested VOs are invalid.
   */
  constructor(props: {
    id: string;
    code: string;
    subject: string;
    group: number;
    credits: number;
    schedule: Schedule; // Expecting a Schedule VO instance
    schedules: Schedule[]; // Expecting an array of Schedule VO instances
    classroom: string;
    teacher: string;
    teachers: string[];
    totalSpaces: number;
    typeOfSubject: string;
    typeOfGroup: string;
    reserved: number;
  }) {
    // Add basic validation if needed
    if (!props.id || !props.code || !props.subject) {
      throw new Error("ScheduleRow basic properties cannot be empty.");
    }
    // Validate nested Schedule objects if they aren't already VOs upon input
    // For example:
    // this.schedule = props.schedule instanceof Schedule ? props.schedule : new Schedule(props.schedule);
    // this.schedules = props.schedules.map(s => s instanceof Schedule ? s : new Schedule(s));

    this.id = props.id;
    this.code = props.code;
    this.subject = props.subject;
    this.group = props.group;
    this.credits = props.credits;
    this.schedule = props.schedule;
    this.schedules = props.schedules;
    this.classroom = props.classroom;
    this.teacher = props.teacher;
    this.teachers = props.teachers;
    this.totalSpaces = props.totalSpaces;
    this.typeOfSubject = props.typeOfSubject;
    this.typeOfGroup = props.typeOfGroup;
    this.reserved = props.reserved;

    // Ensure nested schedules are instances of Schedule VO
    if (!(this.schedule instanceof Schedule)) throw new Error("schedule must be a Schedule VO instance.");
    if (!this.schedules.every(s => s instanceof Schedule)) throw new Error("schedules must be an array of Schedule VO instances.");
  }

  /**
  * Compares two ScheduleRow value objects for equality.
  * Equality is based on all properties including nested VOs.
  * NOTE: Comparing complex VOs for equality can be tricky if order matters in arrays or if deeply nested.
  * Implement a robust equals method considering all properties.
  * For simplicity here, a shallow comparison is shown.
  * @param other - The other ScheduleRow value object to compare.
  * @returns True if all properties are equal, false otherwise.
  */
  public equals(other: ScheduleRow): boolean {
    if (!(other instanceof ScheduleRow)) {
      return false;
    }
    // Add comprehensive comparison logic for all properties, including iterating through arrays and calling equals on nested VOs
    // This is a simplified example:
    return this.id === other.id &&
      this.code === other.code &&
      this.subject === other.subject &&
      this.group === other.group &&
      this.credits === other.credits &&
      this.schedule.equals(other.schedule) && // Compare nested Schedule VOs
      // Comparison for schedules array needs a loop or array method
      this.schedules.length === other.schedules.length &&
      this.schedules.every((s, index) => s.equals(other.schedules[index])) &&
      this.classroom === other.classroom &&
      this.teacher === other.teacher &&
      this.teachers.length === other.teachers.length &&
      this.teachers.every((t, index) => t === other.teachers[index]) && // Simple array comparison
      this.totalSpaces === other.totalSpaces &&
      this.typeOfSubject === other.typeOfSubject &&
      this.typeOfGroup === other.typeOfGroup &&
      this.reserved === other.reserved;
  }
}
