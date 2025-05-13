/**
 * Represents a teacher.
 * This entity is part of the Courses module domain.
 */
export class Teacher {
  /**
   * The unique identifier for the teacher.
   * @readonly
   */
  public readonly id: number;

  /**
   * The first name of the teacher.
   */
  public name: string;

  /**
   * The last name of the teacher.
   */
  public lastname: string;

  /**
   * Creates an instance of Teacher.
   * Used when loading an existing teacher from persistence.
   * @param props - The properties to initialize the Teacher entity.
   * @param props.id - The unique identifier.
   * @param props.name - The first name.
   * @param props.lastname - The last name.
   * @param props.userId - Optional user ID if linked to a User entity.
   * @param props.user - Optional related User entity.
   */
  constructor(props: {
    id: number;
    name: string;
    lastname: string;
  }) {
    this.id = props.id;
    this.name = props.name;
    this.lastname = props.lastname;
  }

  /**
   * Creates a new Teacher instance.
   * Use this static method when creating a teacher for the first time.
   * @param props - The properties required to create a new teacher.
   * @param props.name - The first name.
   * @param props.lastname - The last name.
   * @returns A new Teacher entity instance.
   */
  static createNew(props: {
    name: string;
    lastname: string;
    // userId?: number;
  }): Teacher {
    // Basic validation
    if (!props.name || !props.lastname) {
      throw new Error("Teacher name and lastname are required.");
    }

    return new Teacher({
      id: null as any,
      name: props.name,
      lastname: props.lastname,
    });
  }
}
