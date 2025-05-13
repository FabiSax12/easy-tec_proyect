import { Schedule } from './schedule.vo';

/**
 * Represents a row in the simple course format received from the external service.
 * This is a Value Object defined by its properties.
 */
export class SimpleCourseRow {
  /** @readonly */
  public readonly campus: string;
  /** @readonly */
  public readonly code: string;
  /** @readonly */
  public readonly name: string;
  /** @readonly */
  public readonly group: number;
  /** @readonly */
  public readonly department: string;
  /** @readonly */
  public readonly credits: number;
  /** @readonly */
  public readonly modeId: string;
  /** @readonly */
  public readonly mode: string;
  /** @readonly */
  public readonly type: string;
  /** @readonly */
  public readonly teacher: string;
  /** @readonly */
  public readonly schedules: Schedule[]; // Array of Schedule VOs

  /**
  * Creates an instance of SimpleCourseRow.
  * @param props - The properties to initialize the SimpleCourseRow VO.
  * @throws Error if required properties are missing or nested VOs are invalid.
  */
  constructor(props: {
    campus: string;
    code: string;
    name: string;
    group: number;
    department: string;
    credits: number;
    modeId: string;
    mode: string;
    type: string;
    teacher: string;
    schedules: Schedule[]; // Expecting an array of Schedule VO instances
  }) {
    // Add basic validation if needed
    if (!props.code || !props.name || !props.campus) {
      throw new Error("SimpleCourseRow basic properties cannot be empty.");
    }

    this.campus = props.campus;
    this.code = props.code;
    this.name = props.name;
    this.group = props.group;
    this.department = props.department;
    this.credits = props.credits;
    this.modeId = props.modeId;
    this.mode = props.mode;
    this.type = props.type;
    this.teacher = props.teacher;
    this.schedules = props.schedules;

    // Ensure nested schedules are instances of Schedule VO
    if (!this.schedules.every(s => s instanceof Schedule)) throw new Error("schedules must be an array of Schedule VO instances.");
  }
}
