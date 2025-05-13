import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Inject,
  HttpStatus,
  HttpCode,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Request,
  UseGuards,
  Delete,
  Query,
} from '@nestjs/common';

import { CreateUserUseCase, CreateUserUseCaseInput } from '../../../application/use-cases/create-user.use-case';
import { GetUserByIdUseCase, GetUserByIdUseCaseInput } from '../../../application/use-cases/get-user-by-id.use-case';
import { UpdateUserProfileUseCase, UpdateUserProfileUseCaseInput } from '../../../application/use-cases/update-user.use-case';

import { CreateUserDto } from '../dtos/create-user.dto';

import { AuthGuard } from '@/infrastructure/nestjs/guards/auth.guard';
import { Email } from '@/modules/users/domain/value-objects/email.vo';
import { AdminGuard } from '@/infrastructure/nestjs/guards/admin.guard';
import { UserDetailsDto } from '../dtos/user-details.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserQueryDto } from '../dtos/user-query.dto';
import { UserDetailsMapper } from '../../mappers/user-details.mapper';

/**
 * Controller for handling User-related HTTP requests.
 * This is an Inbound Adapter (HTTP) in the Infrastructure layer of the Users module.
 * It receives HTTP requests, validates input, calls Application layer Use Cases,
 * and relies on Exception Filters to map domain exceptions to HTTP responses.
 */
@Controller('users')
@UsePipes(new ValidationPipe({ transform: true }))
export class UsersController {
  constructor(
    // Inyecta los casos de uso que este controlador necesita
    @Inject(CreateUserUseCase)
    private readonly createUserUseCase: CreateUserUseCase,

    @Inject(GetUserByIdUseCase)
    private readonly getUserByIdUseCase: GetUserByIdUseCase,

    @Inject(UpdateUserProfileUseCase)
    private readonly updateUserProfileUseCase: UpdateUserProfileUseCase,

    // Inyecta el mapper que convierte entidades de dominio a DTOs
    @Inject(UserDetailsMapper)
    private readonly userDetailsMapper: UserDetailsMapper,
  ) { }

  /**
   * Handles POST /users requests to create a new user.
   * Requires appropriate permissions (e.g., Admin) - handled by Guard.
   * @param createUserDto - The DTO containing new user data from the request body.
   * @returns A Promise resolving to the created UserDetailsDto.
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDetailsDto> {

    const useCaseInput: CreateUserUseCaseInput = {
      email: new Email(createUserDto.email),
      password: createUserDto.password,
      name: createUserDto.name,
      lastname: createUserDto.lastname,
      majorId: createUserDto.majorId,
    };
    const createdUserEntity = await this.createUserUseCase.execute(useCaseInput);

    return this.userDetailsMapper.toDto(createdUserEntity);
  }

  /**
   * Handles GET /users/:id requests to retrieve a user by ID.
   * Requires authentication and/or ownership - handled by Guard(s).
   * @param id - The user ID from the URL path.
   * @returns A Promise resolving to the UserDetailsDto.
   */
  @Get(':id')
  @UseGuards(AuthGuard)
  // El guardia ValidateOwnershipGuard verificaría que el usuario autenticado sea el dueño del ID o sea admin.
  async getUserById(@Param('id', ParseIntPipe) id: number): Promise<UserDetailsDto> {
    // 1. Input Validation handled by ParseIntPipe

    // 2. Call the Use Case (Application Layer)
    const useCaseInput: GetUserByIdUseCaseInput = { userId: id };
    const userEntity = await this.getUserByIdUseCase.execute(useCaseInput); // Llama al caso de uso

    // 3. Map the Domain Entity response to a DTO
    return this.userDetailsMapper.toDto(userEntity);
  }

  /**
  * Handles PATCH /users requests to update the authenticated user's profile.
  * Assumes user ID is taken from the authenticated user in the request object provided by AuthGuard.
  * Requires authentication - handled by Guard.
  * @param req - The request object containing the authenticated user's information.
  * @param updateUserDto - The DTO containing updated profile data from the request body.
  * @returns A Promise resolving to the updated UserDetailsDto.
  */
  @Patch()
  @UseGuards(AuthGuard) // Requiere que el usuario esté autenticado
  async updateAuthenticatedUserProfile(@Request() req, @Body() updateUserDto: UpdateUserDto): Promise<UserDetailsDto> {
    const userId = req.user.id;

    const useCaseInput: UpdateUserProfileUseCaseInput = {
      userId: userId,
      name: updateUserDto.name,
      lastname: updateUserDto.lastname,
      majorId: updateUserDto.majorId,
    };
    const updatedUserEntity = await this.updateUserProfileUseCase.execute(useCaseInput);

    return this.userDetailsMapper.toDto(updatedUserEntity);
  }

  /**
  * Handles DELETE /users/:id requests to delete a user.
  * Requires appropriate permissions (e.g., Admin) - handled by Guard.
  * @param id - The user ID from the URL path.
  * @returns A Promise resolving to void (NestJS automatically sends 204 No Content).
  */
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AdminGuard)
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Handles GET /users requests to list users.
   * Requires appropriate permissions (e.g., Admin to list all, Auth to filter by self).
   * Uses query parameters for filtering.
   * @param req - The request object.
   * @param queryDto - DTO for query parameters.
   * @returns A Promise resolving to an array of UserDetailsDto.
   */
  @Get()
  @UseGuards(AuthGuard) // Requiere autenticación para usar este endpoint
  async listUsers(@Request() req, @Query() queryDto: UserQueryDto): Promise<UserDetailsDto[]> {
    throw new Error('Method not implemented.');
  }
}
