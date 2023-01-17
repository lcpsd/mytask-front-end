import { FieldValues } from "react-hook-form";
import { api } from "../config/axios";
import { useUserHook } from "./useUser";

export function useTask() {

    const { getStorageUser } = useUserHook()

    return {
        async createTask(data: FieldValues) {
            const user: localStorageUserProps = await getStorageUser()
            return await api.post(`/task/user/${user.id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        }
    }
}