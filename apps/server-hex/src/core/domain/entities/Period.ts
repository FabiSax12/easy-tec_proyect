import { PeriodType } from '../types/period-type.enum';

/**
 * Represents an academic period (e.g., Semester, Summer Session).
 * This is a core domain entity used to organize courses and user activity over time.
 */
export class Period {
  /**
   * The unique identifier for the period.
   * @readonly
   */
  public readonly id: number;

  /**
   * The type of the period (e.g., S for Semester, V for Summer).
   */
  public type: PeriodType;

  /**
   * The number of the period within the year (e.g., 1 for first semester, 2 for second semester).
   */
  public number: number;

  /**
   * The year of the period.
   */
  public year: number;

  /**
   * The start date of the period.
   */
  public startDate: Date;

  /**
   * The end date of the period.
   */
  public endDate: Date;

  /**
   * Creates an instance of Period.
   * @param props - The properties to initialize the Period entity.
   * @param props.id - The optional unique identifier. If not provided, assumes a new entity.
   * @param props.type - The type of the period.
   * @param props.number - The number of the period within the year.
   * @param props.year - The year of the period.
   * @param props.startDate - The start date of the period.
   * @param props.endDate - The end date of the period.
   * @throws Error if the properties are invalid (e.g., start date after end date).
   */
  constructor(props: {
    id?: number;
    type: PeriodType;
    number: number;
    year: number;
    startDate: Date;
    endDate: Date;
  }) {
    if (props.id !== undefined) {
      this.id = props.id;
    }
    this.type = props.type;
    this.number = props.number;
    this.year = props.year;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
  }
}
