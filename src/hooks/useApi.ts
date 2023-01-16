import { api } from "../config/axios"

export function useApi() {
    return {
        async signIn(email: string, password: string) {
            const res = await api.post("/auth", { email, password })
            return res
        },

        async logOut() {

        },

        async register() {

        }
    }
}