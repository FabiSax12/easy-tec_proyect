import { create } from "zustand"
import { persist } from "zustand/middleware"
import { userLogin, userSignup } from "@/auth/services/auth.service"

import type { User } from "@/shared/interfaces"
import type { SignUpRequest, AuthResponse } from "@/auth/interfaces"

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    signup: (user: SignUpRequest) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    refreshAccessToken: () => Promise<string | null>;
    initializeUser: () => Promise<void>;
}

export const useAuthStore = create(
    persist<AuthState>(
        (set, get) => ({
            user: null,
            accessToken: localStorage.getItem("access_token"),
            refreshToken: localStorage.getItem("refresh_token"),

            signup: async (user: SignUpRequest) => {
                try {
                    await userSignup(user)
                } catch (error) {
                    console.error("Signup failed", error)
                }
            },

            login: async (email: string, password: string) => {
                try {
                    const data = await userLogin(email, password)

                    if (data?.access_token) {
                        localStorage.setItem("access_token", data.access_token)
                        set({ accessToken: data.access_token })
                    }

                    if (data?.refresh_token) {
                        localStorage.setItem("refresh_token", data.refresh_token)
                        set({ refreshToken: data.refresh_token })
                    }

                    await get().initializeUser()
                } catch (error) {
                    console.error("Login failed", error)
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
