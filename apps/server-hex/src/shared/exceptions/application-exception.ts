/**
 * Base class for all application-specific exceptions.
 * These exceptions originate from the domain or application layers and represent
 * business rule violations or expected failures during operation execution.
 */
export abstract class ApplicationException extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
