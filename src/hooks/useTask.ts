import { NewTaskProps } from "../types/task";

export function useTask() {
    return {
        async createTask(props: NewTaskProps) {
            console.log(props)
        }
    }
}