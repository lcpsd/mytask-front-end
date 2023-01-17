import { useNavigate } from "react-router-dom";
import { api } from "../config/axios"
import { useUser } from "../context/auth";

export function useAuth() {

    const { setUser } = useUser()

    const navigate = useNavigate()

    return {
        async signIn(formData: UserLoginProps) {

            const res = await api.post<UserProps>("/auth", formData)

            setUser(res.data)

            localStorage.setItem('Bearer', res.data.token)

            return res
        },

        async logOut() {
            setUser(null)
            localStorage.removeItem('Bearer')
            navigate("/")
        },

        async register(data: NewUserProps) {
            const res = await api.post<AxiosUserRegisterProps>("/user", data)
            return res
        }
    }
}