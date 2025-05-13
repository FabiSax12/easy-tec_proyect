import { ApplicationException } from '@/shared/exceptions/application-exception';

/**
 * Exception thrown when attempting to create or update a Period that overlaps with an existing one.
 * This indicates a violation of a business rule specific to the Period domain.
 */
export class PeriodOverlapException extends ApplicationException {
  /**
   * Creates an instance of PeriodOverlapException.
   * @param overlappingPeriodId - The ID of the existing period that overlaps.
   */
  constructor(public readonly overlappingPeriodId?: number) {
    const message = overlappingPeriodId
      ? `The requested period overlaps with existing period ID ${overlappingPeriodId}.`
      : `The requested period overlaps with an existing period.`;
    super(message);
  }
}
