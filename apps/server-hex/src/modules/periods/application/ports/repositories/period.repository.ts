import { Period } from '@/core/domain/entities/Period';
import { PeriodType } from '@/core/domain/types/period-type.enum';


/**
 * Defines the contract for interacting with Period data persistence.
 * This is a primary port (repository interface) in the Application layer of the Periods module.
 * It the underlying database technology.
 */
export interface PeriodRepository {

  /**
   * Finds a Period by its unique identifier.
   * @param id - The ID of the period to find.
   * @returns A Promise resolving to the Period entity or null if not found.
   */
  findById(id: number): Promise<Period | null>;

  /**
   * Finds a Period by its unique combination of type, number, and year.
   * @param type - The type of the period.
   * @param number - The number of the period.
   * @param year - The year of the period.
   * @returns A Promise resolving to the Period entity or null if not found.
   */
  findByTypeNumberYear(type: PeriodType, number: number, year: number): Promise<Period | null>;


  /**
   * Finds all Periods, optionally ordered by start date.
   * @param orderBy - Optional field to order by (e.g., 'startDate').
   * @param order - Optional order direction ('asc' or 'desc').
   * @returns A Promise resolving to an array of Period entities.
   */
  findAll(orderBy?: string, order?: 'asc' | 'desc'): Promise<Period[]>;

  /**
   * Saves or updates a Period entity.
   * If the entity has an ID, it should be updated; otherwise, it should be created.
   * @param period - The Period entity to save.
   * @returns A Promise resolving to the saved Period entity.
   */
  save(period: Period): Promise<Period>;

  /**
   * Deletes a Period by its unique identifier.
   * @param id - The ID of the period to delete.
   * @returns A Promise that resolves when the period is deleted.
   * @throws SomePersistenceException (or similar) if deletion fails.
   */
  delete(id: number): Promise<void>;

  /**
   * Finds Periods associated with a specific user.
   * This likely involves querying the UserPeriod relationship.
   * @param userId - The ID of the user.
   * @returns A Promise resolving to an array of Period entities the user is enrolled in.
   */
  findByUserId(userId: number): Promise<Period[]>;

  /**
   * Checks for periods that overlap with a given start and end date.
   * This is a specific query needed for business rules like preventing overlapping periods.
   * @param startDate - The start date to check for overlap.
   * @param endDate - The end date to check for overlap.
   * @param excludeId - Optional ID of a period to exclude from the check (useful for updates).
   * @returns A Promise resolving to an array of overlapping Period entities.
   */
  findOverlapping(startDate: Date, endDate: Date, excludeId?: number): Promise<Period[]>;
}
