import { Major } from '@/core/domain/entities/Major';
import { Role } from '@/core/domain/entities/Role';
import { Email } from '../value-objects/email.vo';
import { Password } from '../value-objects/password.vo';

/**
 * Represents a user in the system.
 * This is a core entity for the User module, containing profile and authentication details.
 */
export class User {
  /**
   * The unique identifier for the user.
   * @readonly
   */
  public readonly id: number;

  /**
   * The user's email address (should be unique).
   */
  public email: Email;

  /**
   * The user's password (should be hashed).
   */
  public password: Password;

  /**
   * The user's first name.
   */
  public name: string;

  /**
   * The user's last name.
   */
  public lastname: string;

  /**
   * The ID of the user's major, if applicable.
   */
  public majorId: number | null;

  /**
   * Whether the user's email has been verified.
   */
  public verified: boolean;

  /**
   * The ID of the user's role.
   */
  public roleId: number;

  /**
   * The date and time the user was created.
   * @readonly
   */
  public readonly createdAt: Date;

  public major?: Major;
  public role?: Role;
  // public userPeriods?: UserPeriod[]; // Entidades de otros módulos
  // public tasks?: Task[];
  // public tutoringPosts?: TutoringPost[];
  // public notifications?: Notification[];


  /**
   * Creates an instance of User.
   * Used when loading an existing user from persistence.
   * @param props - The properties to initialize the User entity.
   * @param props.id - The unique identifier for the user.
   * @param props.email - The user's email address.
   * @param props.password - The user's hashed password.
   * @param props.name - The user's first name.
   * @param props.lastname - The user's last name.
   * @param props.majorId - The ID of the user's major (optional).
   * @param props.verified - Whether the user is verified.
   * @param props.roleId - The ID of the user's role.
   * @param props.createdAt - The creation date of the user.
   * @param props.major - Optional related Major entity.
   * @param props.role - Optional related Role entity.
   */
  constructor(props: {
    id: number;
    email: Email;
    password: Password;
    name: string;
    lastname: string;
    majorId: number | null;
    verified: boolean;
    roleId: number;
    createdAt: Date;
    major?: Major;
    role?: Role;
  }) {
    this.id = props.id;
    this.email = props.email;
    this.password = props.password;
    this.name = props.name;
    this.lastname = props.lastname;
    this.majorId = props.majorId;
    this.verified = props.verified;
    this.roleId = props.roleId;
    this.createdAt = props.createdAt;
    this.major = props.major;
    this.role = props.role;
    // Asignar otras relaciones si están en props
  }

  /**
   * Creates a new User instance with default values for properties like 'verified' and 'createdAt'.
   * Use this static method when creating a user for the first time in a use case.
   * @param props - The properties required to create a new user.
   * @param props.email - The user's email address.
   * @param props.password - The user's password (should be hashed before passing here).
   * @param props.name - The user's first name.
   * @param props.lastname - The user's last name.
   * @param props.majorId - The ID of the user's major (optional).
   * @param props.roleId - The ID of the user's role.
   * @returns A new User entity instance.
   */
  static createNew(props: {
    email: Email;
    password: Password;
    name: string;
    lastname: string;
    majorId?: number | null;
    roleId: number;
  }): User {
    // Realizar validaciones de negocio básicas si no se usan Value Objects extensivamente
    if (!props.email || !props.password || !props.name || !props.lastname) {
      throw new Error("Missing required user fields.");
    }

    // Nota: La encriptación de la contraseña debe ocurrir ANTES de llamar a createNew
    // Idealmente en un servicio de dominio o un factory, NO dentro de la entidad misma
    // ya que la entidad de dominio no debería saber sobre la encriptación.

    // Crear la instancia usando el constructor interno
    // Pasamos valores por defecto para propiedades que no se proporcionan en la creación inicial
    return new User({
      // id will be assigned by persistence, so omit it here
      id: null as any, // Use a placeholder or handle it in persistence/mapper
      email: props.email,
      password: props.password,
      name: props.name,
      lastname: props.lastname,
      majorId: props.majorId ?? null, // Ensure it's null if not provided
      verified: false, // Default value
      roleId: props.roleId,
      createdAt: new Date(), // Default value
    });
  }
}