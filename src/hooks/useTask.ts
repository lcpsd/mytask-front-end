import { FieldValues } from "react-hook-form";
import { api } from "../config/axios";

export function useTask() {
    return {
        async createTask(data: FieldValues) {
            api.post(`/task/user/`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        }
    }
}