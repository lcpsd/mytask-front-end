import { api } from "../config/axios"

export function useUserHook() {

    return {
        async createUser(data: NewUserProps) {
            const res = await api.post<AxiosUserRegisterProps>("/user", data)
            return res
        },
        async getUser() {

        }
    }
}