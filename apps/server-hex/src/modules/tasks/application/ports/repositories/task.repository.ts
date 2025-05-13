import { Task } from '@/modules/tasks/domain/entities/Task';
import { TaskState } from '@/core/domain/entities/TaskState';

/**
 * Defines the contract for interacting with Task data persistence.
 * This is a primary port (repository interface) in the Application layer of the Tasks module.
 * Its the underlying database technology.
 */
export interface TaskRepository {

  /**
   * Finds a Task by its unique identifier.
   * @param id - The ID of the task to find.
   * @returns A Promise resolving to the Task entity or null if not found.
   */
  findById(id: number): Promise<Task | null>;

  /**
   * Finds a Task by its unique identifier, including specific related entities.
   * This is useful when a Use Case *always* needs related data (like Course name)
   * to perform its logic or build the response.
   * @param id - The ID of the task to find.
   * @returns A Promise resolving to the Task entity with relations or null if not found.
   */
  findByIdWithCourse(id: number): Promise<Task | null>;


  /**
   * Finds all Tasks, optionally filtered or ordered.
   * @param filter - Optional filtering criteria (can be defined as a type/VO).
   * @param orderBy - Optional field to order by.
   * @param order - Optional order direction.
   * @returns A Promise resolving to an array of Task entities.
   */
  findAll(filter?: any, orderBy?: string, order?: 'asc' | 'desc'): Promise<Task[]>;

  /**
   * Finds Tasks belonging to a specific user.
   * @param userId - The ID of the user.
   * @returns A Promise resolving to an array of Task entities for the given user.
   */
  findByUserId(userId: number): Promise<Task[]>;

  /**
   * Finds Tasks belonging to a specific course.
   * @param courseId - The ID of the course.
   * @returns A Promise resolving to an array of Task entities for the given course.
   */
  findByCourseId(courseId: number): Promise<Task[]>;

  /**
   * Finds Tasks belonging to a specific period.
   * This likely involves querying through the Course entity.
   * @param periodId - The ID of the period.
   * @returns A Promise resolving to an array of Task entities for the given period.
   */
  findByPeriodId(periodId: number): Promise<Task[]>;


  /**
   * Finds Tasks belonging to a specific user within a specific period.
   * @param userId - The ID of the user.
   * @param periodId - The ID of the period.
   * @returns A Promise resolving to an array of Task entities for the given user and period.
   */
  findByUserIdAndPeriodId(userId: number, periodId: number): Promise<Task[]>;


  /**
   * Finds all Task States.
   * This is needed to map state IDs to state entities in the application layer.
   * While TaskState is in core, a repository in the Tasks module might be a logical place
   * to retrieve them if they are primarily used in the context of Tasks/Deliverables.
   * Alternatively, a dedicated TaskStateRepository in the core application layer could exist.
   * Placing it here for now based on the likely primary consumer.
   * @returns A Promise resolving to an array of TaskState entities.
   */
  findAllTaskStates(): Promise<TaskState[]>;

  /**
   * Finds a Task State by its ID.
   * @param stateId - The ID of the task state to find.
   * @returns A Promise resolving to the TaskState entity or null if not found.
   */
  findTaskStateById(stateId: number): Promise<TaskState | null>;

  /**
   * Finds a Task State by its name.
   * @param name - The name of the task state to find.
   * @returns A Promise resolving to the TaskState entity or null if not found.
   */
  findTaskStateByName(name: string): Promise<TaskState | null>;


  /**
   * Saves or updates a Task entity.
   * If the entity has an ID, it should be updated; otherwise, it should be created.
   * @param task - The Task entity to save.
   * @returns A Promise resolving to the saved Task entity.
   */
  save(task: Task): Promise<Task>;

  /**
   * Deletes a Task by its unique identifier.
   * @param id - The ID of the task to delete.
   * @returns A Promise that resolves when the task is deleted.
   * @throws SomePersistenceException (or similar) if deletion fails.
   */
  delete(id: number): Promise<void>;
}
