import { ApplicationException } from '@/shared/exceptions/application-exception';

/**
 * Exception thrown when there is an error interacting with the external schedule service.
 */
export class ScheduleServiceException extends ApplicationException {
  /**
   * Optional: The status code from the external service if available.
   */
  public readonly statusCode?: number;
  /**
   * Optional: The original error from the external service interaction.
   */
  public readonly originalError?: any;

  /**
   * Creates an instance of ScheduleServiceException.
   * @param message - A message describing the error.
   * @param statusCode - Optional status code from the external service.
   * @param originalError - Optional original error details.
   */
  constructor(message: string = 'Error interacting with the schedule service.', statusCode?: number, originalError?: any) {
    super(message);
    this.statusCode = statusCode;
    this.originalError = originalError;
  }
}
