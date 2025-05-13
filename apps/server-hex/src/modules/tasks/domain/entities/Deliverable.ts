import { Task } from './Task';
import { TaskState } from '@/core/domain/entities/TaskState';

/**
 * Represents a deliverable associated with a task.
 * This entity is part of the Tasks module domain.
 */
export class Deliverable {
  /**
   * The unique identifier for the deliverable.
   * @readonly
   */
  public readonly id: number;

  /**
   * The name of the deliverable.
   */
  public name: string;

  /**
   * The ID of the current state of the deliverable.
   */
  public stateId: number;

  /**
   * The percentage weight of this deliverable within its task (0-100).
   */
  public percentageOfTask: number; // Consider Percentage VO

  /**
   * The date of the deliverable (e.g., submission date).
   */
  public date: Date;

  /**
   * The ID of the task this deliverable belongs to.
   * @readonly
   */
  public readonly taskId: number;

  // Optional: Relations
  public state?: TaskState;
  public task?: Task; // Be careful with circular dependencies if Task also loads Deliverables


  /**
   * Creates an instance of Deliverable.
   * Used when loading an existing deliverable from persistence.
   * @param props - The properties to initialize the Deliverable entity.
   * @param props.id - The unique identifier.
   * @param props.name - The name of the deliverable.
   * @param props.stateId - The ID of the deliverable's current state.
   * @param props.percentageOfTask - The percentage weight within its task.
   * @param props.date - The date of the deliverable.
   * @param props.taskId - The ID of the task this deliverable belongs to.
   * @param props.state - Optional related TaskState entity.
   * @param props.task - Optional related Task entity.
   */
  constructor(props: {
    id: number;
    name: string;
    stateId: number;
    percentageOfTask: number; // Or Percentage VO
    date: Date;
    taskId: number;
    state?: TaskState;
    task?: Task;
  }) {
    this.id = props.id;
    this.name = props.name;
    this.stateId = props.stateId;
    this.percentageOfTask = props.percentageOfTask;
    this.date = props.date;
    this.taskId = props.taskId;
    this.state = props.state;
    this.task = props.task;

    // Optional: Add basic domain validation
    // this.validatePercentage();
  }

  /**
   * Creates a new Deliverable instance with default values.
   * Use this static method when creating a deliverable for the first time.
   * @param props - The properties required to create a new deliverable.
   * @param props.name - The name.
   * @param props.percentageOfTask - The percentage weight within its task.
   * @param props.date - The date.
   * @param props.taskId - The ID of the parent task.
   * @returns A new Deliverable entity instance.
   */
  static createNew(props: {
    name: string;
    percentageOfTask: number; // Or Percentage VO
    date: Date;
    taskId: number;
  }): Deliverable {
    // Basic validation
    if (!props.name || props.percentageOfTask < 0 || props.percentageOfTask > 100 || !props.date || !props.taskId) {
      throw new Error("Missing required deliverable fields or invalid values.");
    }

    return new Deliverable({
      id: null as any, // ID assigned by persistence
      name: props.name,
      stateId: 1, // Default state ID (assuming 1 is PENDING)
      percentageOfTask: props.percentageOfTask,
      date: props.date,
      taskId: props.taskId,
    });
  }

  // ==================================================
  //           Domain Logic
  // ==================================================

  /**
   * Updates the state of the deliverable.
   * @param newStateId - The ID of the new state.
   * @throws DeliverableStateTransitionException if the transition is not allowed.
   */
  public updateState(newStateId: number): void {
    // Similar logic to Task state update, potentially using TaskState entity logic
    if (this.stateId === newStateId) {
      console.warn(`Deliverable ${this.id} is already in state ${newStateId}.`);
      return;
    }
    this.stateId = newStateId;
  }

  /**
   * Validates the percentage value.
   * @private
   */
  private validatePercentage(): void {
    if (this.percentageOfTask < 0 || this.percentageOfTask > 100) {
      throw new Error("Deliverable percentage must be between 0 and 100.");
    }
  }
}
