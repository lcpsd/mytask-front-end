import { api } from "../config/axios"

export function useApi() {
    return {
        async signIn(email: string, password: string) {
            const res = await api.post<UserProps>("/auth", { email, password })
            return res
        },

        async logOut() {

        },

        async register() {

        }
    }
}