import { Teacher } from '@/modules/courses/domain/entities/Teacher';

/**
 * Defines the contract for interacting with Teacher data persistence.
 * This is a primary port (repository interface) in the Application layer of the Courses module.
 * Its the underlying database technology.
 */
export interface TeacherRepository {

  /**
   * Finds a Teacher by their unique identifier.
   * @param id - The ID of the teacher to find.
   * @returns A Promise resolving to the Teacher entity or null if not found.
   */
  findById(id: number): Promise<Teacher | null>;

  /**
   * Finds a Teacher by their name and lastname.
   * Useful for checking if a teacher already exists by name.
   * @param name - The name of the teacher.
   * @param lastname - The lastname of the teacher.
   * @returns A Promise resolving to the Teacher entity or null if not found.
   */
  findByNameAndLastname(name: string, lastname: string): Promise<Teacher | null>;

  /**
   * Finds all Teachers, optionally filtered or ordered.
   * @param filter - Optional filtering criteria.
   * @param orderBy - Optional field to order by.
   * @param order - Optional order direction.
   * @returns A Promise resolving to an array of Teacher entities.
   */
  findAll(filter?: any, orderBy?: string, order?: 'asc' | 'desc'): Promise<Teacher[]>;

  /**
   * Saves or updates a Teacher entity.
   * If the entity has an ID, it should be updated; otherwise, it should be created.
   * @param teacher - The Teacher entity to save.
   * @returns A Promise resolving to the saved Teacher entity.
   */
  save(teacher: Teacher): Promise<Teacher>;

  /**
   * Deletes a Teacher by their unique identifier.
   * @param id - The ID of the teacher to delete.
   * @returns A Promise that resolves when the teacher is deleted.
   * @throws SomePersistenceException (or similar) if deletion fails.
   */
  delete(id: number): Promise<void>;
}
