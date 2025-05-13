import { ApplicationException } from './application-exception';

/**
 * Exception thrown when a requested resource or entity is not found.
 * This indicates an expected failure in the application layer when fetching data.
 */
export class NotFoundException extends ApplicationException {
  /**
   * Creates an instance of NotFoundException.
   * @param resourceName - The name of the resource or entity that was not found (e.g., 'User', 'Course').
   * @param identifier - The identifier used to search for the resource (e.g., 'id', 'email').
   * @param identifierValue - The value of the identifier.
   */
  constructor(resourceName: string, identifier: string, identifierValue: string | number) {
    const message = `${resourceName} with ${identifier} '${identifierValue}' not found.`;
    super(message);
    // public readonly resourceName: string = resourceName;
    // public readonly identifier: string = identifier;
    // public readonly identifierValue: string | number = identifierValue;
  }
}