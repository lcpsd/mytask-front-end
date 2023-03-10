import { FieldValues } from "react-hook-form";
import { api } from "../config/axios";
import { useUserHook } from "./useUser";

export function useTaskHook() {

    const { getStorageUser } = useUserHook()

    return {
        async createTask(data: FieldValues) {
            const user: localStorageUserProps = await getStorageUser()

            return await api.post(`/task/user/${user.id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        async getManyTasks(page: string | number) {
            const user: localStorageUserProps = await getStorageUser()

            const { data } = await api.get(`/task/readMany/user/${user.id}/page/${page}`)

            return data
        },

        async deleteTask(id: string) {
            const res = await api.delete(`/task/${id}`)
            return res
        }
    }
}