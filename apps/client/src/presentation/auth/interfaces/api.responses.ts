import { User } from "../../shared/interfaces/api.entities"

/**
 * Endpoint: POST api/auth/login
 */
export interface AuthResponse {
  access_token: string;
  refresh_token: string;
}

/**
 * Endpoint: POST api/auth/signup
 */
export type RegisterResponse = null

/**
 * Endpoint: POST api/auth/refresh
 */
export interface RefreshResponse {
  access_token: string;
}

/**
 * Endpoint: GET api/auth/profile
 */
export type ProfileResponse = User
