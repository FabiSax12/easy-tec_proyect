import { TaskState } from '@/core/domain/entities/TaskState';

/**
 * Defines the contract for interacting with TaskState data persistence (lookup).
 * This is a primary port (repository interface) in the Application layer of the Tasks module,
 * specifically for retrieving TaskState entities.
 * Its the underlying database technology or lookup mechanism.
 */
export interface TaskStateRepository {

  /**
   * Finds a TaskState by its unique identifier.
   * @param id - The ID of the task state to find.
   * @returns A Promise resolving to the TaskState entity or null if not found.
   */
  findById(id: number): Promise<TaskState | null>;

  /**
   * Finds a TaskState by its unique name.
   * Useful for finding a state by its descriptive name.
   * @param name - The name of the task state to find (e.g., 'PENDING', 'FINISHED').
   * @returns A Promise resolving to the TaskState entity or null if not found.
   */
  findByName(name: string): Promise<TaskState | null>;

  /**
   * Finds all Task States.
   * This is often needed to populate dropdowns or reference lists in the application layer.
   * @returns A Promise resolving to an array of TaskState entities.
   */
  findAll(): Promise<TaskState[]>;
}
