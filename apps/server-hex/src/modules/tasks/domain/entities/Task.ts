import { User } from '../../../users/domain/entities/User';
import { Course } from '../../../courses/domain/entities/Course';
import { TaskState } from '../../../../core/domain/entities/TaskState';
import { Deliverable } from './deliverable.entity';

/**
 * Represents an academic task assigned within a course.
 * This entity is the core of the Tasks module.
 */
export class Task {
  /**
   * The unique identifier for the task.
   * @readonly
   */
  public readonly id: number;

  /**
   * The name of the task.
   */
  public name: string;

  /**
   * A detailed description of the task.
   */
  public description: string; // Consider TaskDescription VO

  /**
   * The ID of the current state of the task.
   */
  public stateId: number;

  /**
   * The percentage weight of this task within the course (0-100).
   */
  public percentage: number; // Consider Percentage VO

  /**
   * The deadline for the task.
   */
  public endDate: Date;

  /**
   * The ID of the user to whom the task is assigned.
   * @readonly
   */
  public readonly userId: number;

  /**
   * The ID of the course this task belongs to.
   * @readonly
   */
  public readonly courseId: number;

  // Optional: Relaciones si se cargan con frecuencia
  public state?: TaskState; // La entidad TaskState completa
  public user?: User;
  public course?: Course;
  public deliverables?: Deliverable[]; // Deliverables pertenecen a este dominio


  /**
   * Creates an instance of Task.
   * Used when loading an existing task from persistence.
   * @param props - The properties to initialize the Task entity.
   * @param props.id - The unique identifier.
   * @param props.name - The name of the task.
   * @param props.description - The description of the task.
   * @param props.stateId - The ID of the task's current state.
   * @param props.percentage - The percentage weight of the task.
   * @param props.endDate - The deadline for the task.
   * @param props.userId - The ID of the user the task is assigned to.
   * @param props.courseId - The ID of the course the task belongs to.
   * @param props.state - Optional related TaskState entity.
   * @param props.user - Optional related User entity.
   * @param props.course - Optional related Course entity.
   * @param props.deliverables - Optional related Deliverable entities.
   */
  constructor(props: {
    id: number;
    name: string;
    description: string; // Or TaskDescription VO
    stateId: number;
    percentage: number; // Or Percentage VO
    endDate: Date;
    userId: number;
    courseId: number;
    state?: TaskState;
    user?: User;
    course?: Course;
    deliverables?: Deliverable[];
  }) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.stateId = props.stateId;
    this.percentage = props.percentage;
    this.endDate = props.endDate;
    this.userId = props.userId;
    this.courseId = props.courseId;
    this.state = props.state;
    this.user = props.user;
    this.course = props.course;
    this.deliverables = props.deliverables;

    // Optional: Add basic domain validation in constructor
    // this.validatePercentage();
    // this.validateDates();
  }

  /**
   * Creates a new Task instance with default values for properties like 'stateId' and 'percentage'.
   * Use this static method when creating a task for the first time in a use case.
   * @param props - The properties required to create a new task.
   * @param props.name - The name of the task.
   * @param props.description - The description of the task.
   * @param props.endDate - The deadline for the task.
   * @param props.userId - The ID of the user the task is assigned to.
   * @param props.courseId - The ID of the course this task belongs to.
   * @param props.percentage - The percentage weight of the task (optional, defaults to 0).
   * @returns A new Task entity instance.
   */
  static createNew(props: {
    name: string;
    description: string;
    endDate: Date;
    userId: number;
    courseId: number;
    percentage?: number; // Make optional
  }): Task {
    // Basic validation
    if (!props.name || !props.description || !props.endDate || !props.userId || !props.courseId) {
      throw new Error("Missing required task fields.");
    }

    return new Task({
      id: null as any, // ID assigned by persistence
      name: props.name,
      description: props.description,
      stateId: 1, // Default state ID (assuming 1 is PENDING based on your schema default)
      percentage: props.percentage ?? 0, // Default percentage
      endDate: props.endDate,
      userId: props.userId,
      courseId: props.courseId,
    });
  }

  // ==================================================
  //           Domain Logic
  // ==================================================

  /**
   * Updates the state of the task.
   * Includes domain logic for allowed state transitions based on TaskState entity logic if available.
   * @param newStateId - The ID of the new state.
   * @throws TaskStateTransitionException if the transition is not allowed.
   */
  public updateState(newStateId: number): void {
    // You might fetch the TaskState entity from a repository in the use case
    // and then call a method like this:
    // public updateState(newState: TaskState): void {
    //    if (!this.state.canTransitionTo(newState)) { // Requires 'state' relation loaded and logic in TaskState entity
    //       throw new Error(...); // Domain exception
    //    }
    //    this.stateId = newState.id;
    //    this.state = newState; // Update loaded relation if desired
    // }

    // Basic version just updating ID (less expressive):
    if (this.stateId === newStateId) {
      console.warn(`Task ${this.id} is already in state ${newStateId}.`);
      return;
    }
    // Add domain logic here if needed for transitions based just on IDs
    this.stateId = newStateId;
  }

  /**
   * Validates the percentage value.
   * @private
   */
  private validatePercentage(): void {
    if (this.percentage < 0 || this.percentage > 100) {
      throw new Error("Task percentage must be between 0 and 100.");
    }
  }

  /**
   * Validates the task dates (e.g., endDate is in the future).
   * @private
   */
  private validateDates(): void {
    if (this.endDate <= new Date()) {
      // This validation depends on the current time, which can make unit testing harder.
      // Consider if this validation is best placed here, in a factory, or in a use case.
      console.warn(`Task ${this.id} end date is in the past or present.`);
    }
  }
}
