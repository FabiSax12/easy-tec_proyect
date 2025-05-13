import { Teacher } from './Teacher';
import { Period } from '@/core/domain/entities/Period';
import { CourseState } from '@/core/domain/types/course-state.enum';

/**
 * Represents an academic course.
 * This entity is the core of the Courses module.
 */
export class Course {
  /**
   * The unique identifier for the course.
   * @readonly
   */
  public readonly id: number;

  /**
   * The name of the course.
   */
  public name: string;

  /**
   * The unique code of the course (e.g., 'CS101').
   */
  // public code: CourseCode; // If using Value Object
  public code: string;

  /**
   * The current state of the course (e.g., PENDING, COURSING, FINISHED).
   */
  public state: CourseState;

  /**
   * The ID of the teacher assigned to the course (optional).
   */
  public teacherId: number | null;

  /**
   * The number of credits for the course.
   */
  public credits: number;

  /**
   * The ID of the academic period the course belongs to.
   * @readonly
   */
  public readonly periodId: number;

  // Optional: Relaciones si se cargan con frecuencia
  public teacher?: Teacher;
  public period?: Period;
  // public tasks?: Task[]; // Tasks pertenecen a su propio módulo, referenciar con cautela aquí


  /**
   * Creates an instance of Course.
   * Used when loading an existing course from persistence.
   * @param props - The properties to initialize the Course entity.
   * @param props.id - The unique identifier.
   * @param props.name - The name of the course.
   * @param props.code - The unique code of the course.
   * @param props.state - The current state of the course.
   * @param props.teacherId - The ID of the assigned teacher (optional).
   * @param props.credits - The number of credits.
   * @param props.periodId - The ID of the period the course belongs to.
   * @param props.teacher - Optional related Teacher entity.
   * @param props.period - Optional related Period entity.
   */
  constructor(props: {
    id: number;
    name: string;
    code: string; // Or CourseCode if using VO
    state: CourseState;
    teacherId: number | null;
    credits: number;
    periodId: number;
    teacher?: Teacher;
    period?: Period;
  }) {
    this.id = props.id;
    this.name = props.name;
    // this.code = typeof props.code === 'string' ? new CourseCode(props.code) : props.code; // Handle VO if used
    this.code = props.code;
    this.state = props.state;
    this.teacherId = props.teacherId;
    this.credits = props.credits;
    this.periodId = props.periodId;
    this.teacher = props.teacher;
    this.period = props.period;

    // Optional: Add basic domain validation in constructor
    // this.validateCredits();
  }

  /**
   * Creates a new Course instance with default values for properties like 'state'.
   * Use this static method when creating a course for the first time in a use case.
   * @param props - The properties required to create a new course.
   * @param props.name - The name of the course.
   * @param props.code - The unique code of the course.
   * @param props.teacherId - The ID of the assigned teacher (optional).
   * @param props.credits - The number of credits.
   * @param props.periodId - The ID of the period the course belongs to.
   * @returns A new Course entity instance.
   */
  static createNew(props: {
    name: string;
    code: string; // Or string if using VO
    teacherId?: number | null;
    credits: number;
    periodId: number;
  }): Course {
    // Basic validation
    if (!props.name || !props.code || props.credits <= 0 || !props.periodId) {
      throw new Error("Missing required course fields or invalid values.");
    }
    // You might validate props.code format here or in a CourseCode VO constructor

    return new Course({
      id: null as any, // ID assigned by persistence
      name: props.name,
      code: props.code,
      state: CourseState.PENDING, // Default state
      teacherId: props.teacherId ?? null,
      credits: props.credits,
      periodId: props.periodId,
    });
  }

  // ==================================================
  //           Domain Logic
  // ==================================================

  /**
   * Assigns a teacher to the course.
   * @param teacherId - The ID of the teacher to assign.
   */
  public assignTeacher(teacherId: number): void {
    if (this.teacherId !== null) {
      // Optional: Throw an error or warning if a teacher is already assigned
      console.warn(`Course ${this.id} already has a teacher assigned.`);
    }
    this.teacherId = teacherId;
  }

  /**
   * Updates the state of the course.
   * Includes domain logic for allowed state transitions.
   * @param newState - The new state for the course.
   * @throws CourseStateTransitionException if the transition is not allowed.
   */
  public updateState(newState: CourseState): void {
    // Implement your state transition logic here
    if (!this.isStateTransitionAllowed(newState)) {
      // Throw a domain-specific exception
      throw new Error(`Invalid state transition from ${this.state} to ${newState} for course ${this.id}.`); // Replace with domain exception
    }
    this.state = newState;
  }

  /**
   * Checks if a state transition is allowed based on current state.
   * @param newState - The target state.
   * @returns True if the transition is allowed, false otherwise.
   * @private
   */
  private isStateTransitionAllowed(newState: CourseState): boolean {
    switch (this.state) {
      case CourseState.PENDING:
        return newState === CourseState.COURSING;
      case CourseState.COURSING:
        return newState === CourseState.FINISHED;
      case CourseState.FINISHED:
        return false; // Cannot transition from FINISHED
      default:
        return false;
    }
  }

  /**
   * Validates the credits value.
   * @private
   */
  private validateCredits(): void {
    if (this.credits <= 0) {
      throw new Error("Course credits must be positive.");
    }
  }
}
