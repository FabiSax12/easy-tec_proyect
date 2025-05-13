import { ApplicationException } from '@/shared/exceptions/application-exception';

/**
 * Exception thrown when attempting to create a Course with a code that already exists within the same period (or globally, depending on rules).
 */
export class CourseCodeAlreadyExistsException extends ApplicationException {
  public readonly code: string;

  /**
   * Creates an instance of CourseCodeAlreadyExistsException.
   * @param code - The course code that is already in use.
   * @param periodId - Optional period ID if the uniqueness is per period.
   */
  constructor(code: string, periodId?: number) {
    const message = periodId
      ? `Course code '${code}' already exists in period ${periodId}.`
      : `Course code '${code}' already exists.`;
    super(message);
    this.code = code;
  }
}
