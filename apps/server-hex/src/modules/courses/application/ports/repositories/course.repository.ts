import { Course } from '@/modules/courses/domain/entities/Course';

/**
 * Defines the contract for interacting with Course data persistence.
 * This is a primary port (repository interface) in the Application layer of the Courses module.
 * It the underlying database technology.
 */
export interface CourseRepository {

  /**
   * Finds a Course by its unique identifier.
   * @param id - The ID of the course to find.
   * @returns A Promise resolving to the Course entity or null if not found.
   */
  findById(id: number): Promise<Course | null>;

  /**
   * Finds a Course by its unique code within a specific period.
   * Assuming course codes are unique per period.
   * @param code - The code of the course.
   * @param periodId - The ID of the period.
   * @returns A Promise resolving to the Course entity or null if not found.
   */
  findByCodeAndPeriod(code: string, periodId: number): Promise<Course | null>;


  /**
   * Finds all Courses, optionally filtered or ordered.
   * @param filter - Optional filtering criteria (can be defined as a type/VO).
   * @param orderBy - Optional field to order by.
   * @param order - Optional order direction.
   * @returns A Promise resolving to an array of Course entities.
   */
  findAll(filter?: any, orderBy?: string, order?: 'asc' | 'desc'): Promise<Course[]>;

  /**
   * Finds courses belonging to a specific period.
   * @param periodId - The ID of the period.
   * @returns A Promise resolving to an array of Course entities for the given period.
   */
  findByPeriodId(periodId: number): Promise<Course[]>;

  /**
   * Saves or updates a Course entity.
   * If the entity has an ID, it should be updated; otherwise, it should be created.
   * @param course - The Course entity to save.
   * @returns A Promise resolving to the saved Course entity.
   */
  save(course: Course): Promise<Course>;

  /**
   * Deletes a Course by its unique identifier.
   * @param id - The ID of the course to delete.
   * @returns A Promise that resolves when the course is deleted.
   * @throws SomePersistenceException (or similar) if deletion fails.
   */
  delete(id: number): Promise<void>;
}
