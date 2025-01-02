import { create } from "zustand"
import { persist } from "zustand/middleware"

import type { User } from "@/domain/entities/User"
import type { AuthResponse } from "@/presentation/auth/interfaces"
import { createUserService } from "@/application/services/UserService"
import { userApiRepository } from "@/infraestructure/api/UserApiRepository"
import { CreateUserDto } from "@/domain/entities/User"
import { createAuthService } from "@/application/services/AuthService"
import { authApiRepository } from "@/infraestructure/api/AuthApiRepository"

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    signup: (user: CreateUserDto) => Promise<User>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    refreshAccessToken: () => Promise<string | null>;
    initializeUser: () => Promise<void>;
}

const userService = createUserService(userApiRepository)
const authService = createAuthService(authApiRepository)

export const useAuthStore = create(
    persist<AuthState>(
        (set, get) => ({
            user: null,
            accessToken: localStorage.getItem("access_token"),
            refreshToken: localStorage.getItem("refresh_token"),

            signup: async (user: CreateUserDto) => {
                try {
                    const createdUser = await userService.createUser(user)
                    set({ user: createdUser })
                    return createdUser
                } catch (error) {
                    console.error("Signup failed", error)
                    throw error
                }
            },

            login: async (email: string, password: string) => {
                try {
                    const data = await authService.login(email, password)

                    if (data.accessToken) {
                        localStorage.setItem("access_token", data.accessToken)
                        set({ accessToken: data.accessToken })
                    }

                    if (data.refreshToken) {
                        localStorage.setItem("refresh_token", data.refreshToken)
                        set({ refreshToken: data.refreshToken })
                    }

                    get().initializeUser()
                } catch (error) {
                    console.error("Login failed", error)
                    throw error
                }
            },

            logout: () => {
                localStorage.removeItem("access_token")
                localStorage.removeItem("refresh_token")
                set({ accessToken: null, refreshToken: null, user: null })
            },

            refreshAccessToken: async () => {
                const { refreshToken, logout } = get()
                try {
                    const response = await fetch("/api/auth/refresh", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ refreshToken }),
                    })

                    const data = (await response.json()) as AuthResponse

                    if (data?.access_token) {
                        localStorage.setItem("access_token", data.access_token)
                        set({ accessToken: data.access_token })
                        return data.access_token
                    } else {
                        logout()
                        return null
                    }
                } catch (error) {
                    console.error("Failed to refresh access token", error)
                    logout()
                    return null
                }
            },

            initializeUser: async () => {
                const { accessToken, user } = get()
                if (!accessToken || user) return

                try {
                    const response = await fetch("/api/auth/profile", {
                        headers: { Authorization: `Bearer ${accessToken}` },
                    })
                    const data = (await response.json()) as User

                    if (data) {
                        set({ user: data })
                    }
                } catch (error) {
                    console.error("Failed to get user data", error)
                    set({ user: null })
                }
            }
        }),
        {
            name: "auth"
        }
    )
)
