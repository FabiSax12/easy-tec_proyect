import { Deliverable } from '@/modules/tasks/domain/entities/Deliverable';

/**
 * Defines the contract for interacting with Deliverable data persistence.
 * This is a primary port (repository interface) in the Application layer of the Tasks module.
 * Its the underlying database technology.
 */
export interface DeliverableRepository {

  /**
   * Finds a Deliverable by its unique identifier.
   * @param id - The ID of the deliverable to find.
   * @returns A Promise resolving to the Deliverable entity or null if not found.
   */
  findById(id: number): Promise<Deliverable | null>;

  /**
   * Finds a Deliverable by its unique identifier, including specific related entities.
   * @param id - The ID of the deliverable to find.
   * @returns A Promise resolving to the Deliverable entity with relations or null if not found.
   */
  findByIdWithTask(id: number): Promise<Deliverable | null>;


  /**
   * Finds all Deliverables, optionally filtered or ordered.
   * @param filter - Optional filtering criteria.
   * @param orderBy - Optional field to order by.
   * @param order - Optional order direction.
   * @returns A Promise resolving to an array of Deliverable entities.
   */
  findAll(filter?: any, orderBy?: string, order?: 'asc' | 'desc'): Promise<Deliverable[]>;

  /**
   * Finds Deliverables belonging to a specific task.
   * @param taskId - The ID of the task.
   * @returns A Promise resolving to an array of Deliverable entities for the given task.
   */
  findByTaskId(taskId: number): Promise<Deliverable[]>;


  /**
   * Saves or updates a Deliverable entity.
   * If the entity has an ID, it should be updated; otherwise, it should be created.
   * @param deliverable - The Deliverable entity to save.
   * @returns A Promise resolving to the saved Deliverable entity.
   */
  save(deliverable: Deliverable): Promise<Deliverable>;

  /**
   * Deletes a Deliverable by its unique identifier.
   * @param id - The ID of the deliverable to delete.
   * @returns A Promise that resolves when the deliverable is deleted.
   * @throws SomePersistenceException (or similar) if deletion fails.
   */
  delete(id: number): Promise<void>;
}
