/**
 * Represents a user role within the system (e.g., Student, Teacher, Admin).
 * This is a core domain entity used for access control and permissions.
 */
export class Role {
  /**
   * The unique identifier for the role.
   * @readonly
   */
  public readonly id: number;

  /**
   * The name of the role.
   */
  public name: string;

  /**
   * Creates an instance of Role.
   * @param props - The properties to initialize the Role entity.
   * @param props.id - The optional unique identifier. If not provided, assumes a new entity.
   * @param props.name - The name of the role.
   */
  constructor(props: { id?: number; name: string }) {
    if (props.id !== undefined) {
      this.id = props.id;
    }
    this.name = props.name;
  }
}
