import { ApplicationException } from '@/shared/exceptions/application-exception';

/**
 * Exception thrown when there is an error mapping raw data from the schedule service to domain value objects.
 */
export class ScheduleDataMappingException extends ApplicationException {
  /**
   * Optional: The raw data that could not be mapped.
   */
  public readonly rawData?: any;

  /**
   * Creates an instance of ScheduleDataMappingException.
   * @param message - A message describing the mapping error.
   * @param rawData - Optional raw data that failed to map.
   */
  constructor(message: string = 'Error mapping schedule data.', rawData?: any) {
    super(message);
    this.rawData = rawData;
  }
}
