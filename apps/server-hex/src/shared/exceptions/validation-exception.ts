import { ApplicationException } from './application-exception';

/**
 * Exception thrown when input data fails a business rule validation within the application layer.
 * This is distinct from basic data format validation (which might be handled by DTOs/Pipes).
 */
export class ValidationException extends ApplicationException {
  /**
   * Optional details about the validation errors.
   */
  public readonly errors?: { [key: string]: string[] };

  /**
   * Creates an instance of ValidationException.
   * @param message - A general message describing the validation failure.
   * @param errors - Optional details about specific field errors.
   */
  constructor(message: string = 'Business rule validation failed.', errors?: { [key: string]: string[] }) {
    super(message);
    this.errors = errors;
  }
}
