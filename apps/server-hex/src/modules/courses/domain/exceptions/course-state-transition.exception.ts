import { ApplicationException } from '@/shared/exceptions/application-exception';
import { CourseState } from '@/core/domain/types/course-state.enum';

/**
 * Exception thrown when attempting an invalid state transition for a Course.
 */
export class CourseStateTransitionException extends ApplicationException {
  public readonly current: CourseState;
  public readonly target: CourseState;
  public readonly courseId: number;

  /**
   * Creates an instance of CourseStateTransitionException.
   * @param courseId - The ID of the course.
   * @param current - The current state of the course.
   * @param target - The target state for the transition.
   */
  constructor(courseId: number, current: CourseState, target: CourseState) {
    const message = `Invalid state transition for course ${courseId} from ${current} to ${target}.`;
    super(message);
    this.courseId = courseId;
    this.current = current;
    this.target = target;
  }
}
