import { create } from "zustand"
import { persist } from "zustand/middleware"
import { getNewAccessToken, getUserProfile, userLogin, userSignup } from "@/modules/auth/services/auth.service"

import type { User, CreateUserDto } from "@/shared/types/entities/User"

interface AuthState {
    user: User | null;
    accessToken: string | null;
    loggedDate: Date | null;
    signup: (user: CreateUserDto) => Promise<{ email: string }>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    refreshAccessToken: () => Promise<string | null>;
    initializeUser: () => Promise<void>;
}

export const useAuthStore = create(
    persist<AuthState>(
        (set, get) => ({
            user: null,
            accessToken: null,
            loggedDate: null,

            signup: async (user: CreateUserDto) => {
                try {
                    await userSignup(user)
                    console.log("User signed up")
                    return { email: user.email }
                } catch (error) {
                    console.error("Signup failed", error)
                    throw error
                }
            },

            login: async (email: string, password: string) => {
                try {
                    const data = await userLogin(email, password)

                    if (data?.access_token) {
                        set({
                            accessToken: data.access_token,
                            loggedDate: new Date()
                        })
                    }

                    await get().initializeUser()
                } catch (error) {
                    console.error("Login failed", error)
                    throw error
                }
            },

            logout: () => {
                set({ accessToken: null, loggedDate: null, user: null })
            },

            refreshAccessToken: async () => {
                const { logout } = get()

                try {
                    const access_token = await getNewAccessToken()
                    console.log(access_token)

                    if (access_token) {
                        set({
                            accessToken: access_token,
                            loggedDate: new Date()
                        })
                        return access_token
                    } else {
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
                    const user = await getUserProfile()

                    if (user) {
                        set({ user })
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
