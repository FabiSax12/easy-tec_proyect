export abstract class MajorRepository {
  /**
   * Finds a Major by its unique identifier.
   * @param id - The ID of the major to find.
   * @returns A Promise resolving to the Major entity or null if not found.
   */
  abstract findById(id: number): Promise<any | null>;

  /**
   * Finds all Majors in the system.
   * @returns A Promise resolving to an array of Major entities.
   */
  abstract findAll(): Promise<any[]>;

  /**
   * Saves or updates a Major entity.
   * If the entity has an ID, it should be updated; otherwise, it should be created.
   * @param major - The Major entity to save.
   * @returns A Promise resolving to the saved Major entity.
   */
  abstract save(major: any): Promise<any>;

  /**
   * Deletes a Major by its unique identifier.
   * @param id - The ID of the major to delete.
   * @returns A Promise that resolves when the major is deleted.
   * @throws SomePersistenceException (or similar) if deletion fails.
   */
  abstract delete(id: number): Promise<void>;
}