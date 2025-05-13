import { User } from '@/modules/users/domain/entities/User';
import { Email } from '@/modules/users/domain/value-objects/email.vo';

/**
 * Defines the contract for interacting with User data persistence.
 * This is a primary port (repository interface) in the Application layer of the Users module.
 * It abstracts the underlying database technology.
 */
export abstract class UserRepository {

  /**
   * Finds a User by their unique identifier.
   * @param id - The ID of the user to find.
   * @returns A Promise resolving to the User entity or null if not found.
   */
  abstract findById(id: number): Promise<User | null>;

  /**
   * Finds a User by their email address.
   * @param email - The email address of the user to find.
   * // If using Email VO:  findByEmail(email: Email): Promise<User | null>;
   * @returns A Promise resolving to the User entity or null if not found.
   */
  abstract findByEmail(email: Email): Promise<User | null>;

  /**
   * Finds all Users in the system.
   * @returns A Promise resolving to an array of User entities.
   */
  abstract findAll(): Promise<User[]>;

  /**
   * Saves or updates a User entity.
   * If the entity has an ID, it should be updated; otherwise, it should be created.
   * @param user - The User entity to save.
   * @returns A Promise resolving to the saved User entity.
   */
  abstract save(user: User): Promise<User>;

  /**
   * Deletes a User by their unique identifier.
   * @param id - The ID of the user to delete.
   * @returns A Promise that resolves when the user is deleted.
   * @throws SomePersistenceException (or similar) if deletion fails.
   */
  abstract delete(id: number): Promise<void>;

  /**
   * Checks if a user is associated with a specific period.
   * This might involve querying the UserPeriod relationship.
   * @param userId - The ID of the user.
   * @param periodId - The ID of the period.
   * @returns A Promise resolving to true if the user is in the period, false otherwise.
   */
  abstract isUserPeriod(userId: number, periodId: number): Promise<boolean>;

  /**
   * Checks if a user is associated with a specific course through their period enrollment.
   * This logic might be complex and could be refactored or live in a dedicated Use Case or repository.
   * For now, keeping it here as it was in the original service, assuming it's primarily data query.
   * @param userId - The ID of the user.
   * @param courseId - The ID of the course.
   * @returns A Promise resolving to true if the user is associated with the course, false otherwise.
   */
  abstract isUserCourse(userId: number, courseId: number): Promise<boolean>;

  /**
   * Checks if a specific task belongs to a user.
   * @param userId - The ID of the user.
   * @param taskId - The ID of the task.
   * @returns A Promise resolving to true if the task belongs to the user, false otherwise.
   */
  abstract isUserTask(userId: number, taskId: number): Promise<boolean>;
}
