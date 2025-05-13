import { ApplicationException } from '@/shared/exceptions/application-exception';
import { TaskState } from '@/core/domain/entities/TaskState';

/**
 * Exception thrown when attempting an invalid state transition for a Task or Deliverable.
 */
export class TaskStateTransitionException extends ApplicationException {
  public readonly itemId: number; // Task or Deliverable ID
  public readonly itemType: 'Task' | 'Deliverable';
  public readonly current: TaskState; // Or stateId if you don't load the entity
  public readonly target: TaskState; // Or stateId

  /**
   * Creates an instance of TaskStateTransitionException.
   * @param itemId - The ID of the task or deliverable.
   * @param itemType - The type of item ('Task' or 'Deliverable').
   * @param current - The current state (entity or ID).
   * @param target - The target state (entity or ID).
   */
  constructor(itemId: number, itemType: 'Task' | 'Deliverable', current: TaskState, target: TaskState) {
    const message = `Invalid state transition for ${itemType} ${itemId} from ${current.name} to ${target.name}.`;
    super(message);
    this.itemId = itemId;
    this.itemType = itemType;
    this.current = current;
    this.target = target;
  }
}

