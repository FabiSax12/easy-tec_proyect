import { ApplicationException } from '@/shared/exceptions/application-exception';

/**
 * Exception thrown when there is an error during deliverable creation.
 */
export class DeliverableCreationException extends ApplicationException {
  constructor(message: string = 'Failed to create deliverable.') {
    super(message);
  }
}
