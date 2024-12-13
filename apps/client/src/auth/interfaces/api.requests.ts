/**
 * Endpoint: POST api/auth/login
 */
export interface AuthRequest {
  email: string,
  password: string
}

/**
 * Endpoint: POST api/auth/signup
 */
export interface SignUpRequest {
  name: string
  lastname: string
  email: string
  password: string
}