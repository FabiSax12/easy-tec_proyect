import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/User';
import { UserDetailsDto } from '../http/dtos/user-details.dto';

/**
 * Mapper to convert a User domain entity to a UserDetailsDto for HTTP responses.
 * This is part of the Infrastructure layer (Presentation/HTTP Adapter).
 * It decides which properties of the domain entity are exposed to the client and how they are formatted.
 */
@Injectable()
export class UserDetailsMapper {
  /**
   * Converts a User entity to a UserDetailsDto.
   * @param user - The User domain entity.
   * @returns The corresponding UserDetailsDto.
   */
  toDto(user: User): UserDetailsDto {
    const dto = new UserDetailsDto();

    dto.id = user.id;
    dto.email = user.email.value;
    dto.name = user.name;
    dto.lastname = user.lastname;
    dto.majorId = user.majorId;
    dto.verified = user.verified;
    dto.roleId = user.roleId;
    dto.createdAt = user.createdAt;

    // TODO: Mapear propiedades de relaciones si las entidades relacionadas están cargadas

    // if (user.major) {
    //     dto.majorName = user.major.name; // Mapear el nombre de la carrera
    //     // Si Major fuera una entidad compleja, podrías mapearla completamente:
    //     // dto.major = this.majorMapper.toDto(user.major);
    // }
    // if (user.role) {
    //      dto.roleName = user.role.name; // Mapear el nombre del rol
    //      // Si Role fuera una entidad compleja:
    //      // dto.role = this.roleMapper.toDto(user.role);
    // }

    return dto;
  }
}
