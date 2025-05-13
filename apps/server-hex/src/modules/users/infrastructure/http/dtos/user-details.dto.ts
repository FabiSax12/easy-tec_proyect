/**
 * Data Transfer Object (DTO) representing the details of a user to be sent in HTTP responses.
 * This is an Outbound Adapter in the Infrastructure layer (HTTP Presentation).
 * It exposes selected properties of the User domain entity in a format suitable for the client.
 */
export class UserDetailsDto {
  id: number;

  email: string;

  name: string;

  lastname: string;

  majorId?: number | null;

  verified: boolean;

  roleId: number;

  createdAt?: Date;

  majorName?: string;

  roleName?: string;
}

