import { ApplicationException } from '@/shared/exceptions/application-exception';

/**
 * Exception thrown when there is an error during task creation (e.g., invalid data, missing dependencies).
 */
export class TaskCreationException extends ApplicationException {
  constructor(message: string = 'Failed to create task.') {
    super(message);
  }
}
