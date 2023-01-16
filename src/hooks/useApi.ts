import { api } from "../config/axios"
import { useUser } from "../context/auth"

export function useApi() {
    const { setUser, user } = useUser()

    return {
        async signIn(email: string, password: string) {
            const res = await api.post<UserProps>("/auth", { email, password })
            localStorage.setItem('Bearer', res.data.token)
            return res
        },

        async logOut() {
            setUser(undefined)
            localStorage.setItem('Bearer', "")
        },

        async register(data: UserRegisterProps) {
            const res = await api.post<AxiosUserRegisterProps>("/user", data)
            return res
        }
    }
}