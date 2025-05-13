/**
 * Represents the state of a task or deliverable (e.g., PENDING, COURSING, FINISHED).
 * This is a core domain entity used to track the progress of work items.
 */
export class TaskState {
  /**
   * The unique identifier for the task state.
   * @readonly
   */
  public readonly id: number;

  /**
   * The name of the task state.
   */
  public name: string;

  /**
   * Creates an instance of TaskState.
   * @param props - The properties to initialize the TaskState entity.
   * @param props.id - The optional unique identifier. If not provided, assumes a new entity.
   * @param props.name - The name of the task state.
   */
  constructor(props: { id?: number; name: string }) {
    if (props.id !== undefined) {
      this.id = props.id;
    }
    this.name = props.name;
  }
}
