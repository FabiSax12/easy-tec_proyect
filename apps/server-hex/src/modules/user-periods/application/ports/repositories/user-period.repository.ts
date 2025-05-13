import { UserPeriod } from '@/modules/user-periods/domain/entities/UserPeriod';

/**
 * Defines the contract for interacting with UserPeriod data persistence.
 * This is a primary port (repository interface) in the Application layer of the User Periods module.
 * Its the underlying database technology.
 */
export interface UserPeriodRepository {

  /**
   * Finds a UserPeriod record by its unique identifier.
   * @param id - The ID of the user period record to find.
   * @returns A Promise resolving to the UserPeriod entity or null if not found.
   */
  findById(id: number): Promise<UserPeriod | null>;

  /**
   * Finds a UserPeriod record by the IDs of the user and period.
   * Useful for checking if a user is already enrolled in a specific period (violating unique constraint).
   * @param userId - The ID of the user.
   * @param periodId - The ID of the period.
   * @returns A Promise resolving to the UserPeriod entity or null if found.
   */
  findByUserIdAndPeriodId(userId: number, periodId: number): Promise<UserPeriod | null>;


  /**
   * Finds all UserPeriod records for a specific user.
   * Useful for listing all periods a user is enrolled in.
   * @param userId - The ID of the user.
   * @returns A Promise resolving to an array of UserPeriod entities.
   */
  findByUserId(userId: number): Promise<UserPeriod[]>;

  /**
   * Finds all UserPeriod records for a specific period.
   * Useful for listing all users enrolled in a specific period.
   * @param periodId - The ID of the period.
   * @returns A Promise resolving to an array of UserPeriod entities.
   */
  findByPeriodId(periodId: number): Promise<UserPeriod[]>;


  /**
   * Saves or updates a UserPeriod entity.
   * If the entity has an ID, it should be updated; otherwise, it should be created.
   * @param userPeriod - The UserPeriod entity to save.
   * @returns A Promise resolving to the saved UserPeriod entity.
   */
  save(userPeriod: UserPeriod): Promise<UserPeriod>;

  /**
   * Deletes a UserPeriod record by its unique identifier.
   * @param id - The ID of the user period record to delete.
   * @returns A Promise that resolves when the record is deleted.
   * @throws SomePersistenceException (or similar) if deletion fails.
   */
  delete(id: number): Promise<void>;

  // findByIdWithUserAndPeriod(id: number): Promise<UserPeriod | null>;
  // findByUserIdWithPeriods(userId: number): Promise<UserPeriod[]>; // Load Period entity for each enrollment
  // findByPeriodIdWithUsers(periodId: number): Promise<UserPeriod[]>; // Load User entity for each enrollment

}
