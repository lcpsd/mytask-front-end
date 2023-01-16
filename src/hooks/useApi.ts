import axios from "axios";
import { api } from "../config/axios"

export function useApi() {

    return {
        async signIn(email: string, password: string) {
            const res = await api.post<UserProps>("/auth", { email, password })

            localStorage.setItem('Bearer', res.data.token)

            return res
        },

        async logOut() {
            localStorage.setItem('Bearer', "")
        },

        async register(data: UserRegisterProps) {
            const res = await api.post<AxiosUserRegisterProps>("/user", data)
            return res
        }
    }
}