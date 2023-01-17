import { FieldValues } from "react-hook-form"
import { useTask } from "../context/task"
import { useFormResolver } from "../hooks/useFormResolver"
import { useTaskHook } from "../hooks/useTask"
import { taskSchema } from "../schemas/task"

export function NewTaskInput() {

    const { createTask, getManyTasks } = useTaskHook()
    const { page } = useTask()

    const {
        register,
        handleSubmit,
        errors
    } = useFormResolver(taskSchema)

    async function handleNewTask(data: FieldValues) {
        const sanitize = {
            ...data,
            image: data.image[0]
        }

        const res = await createTask(sanitize)
        getManyTasks(page)
    }

    return (
        <form onSubmit={handleSubmit(handleNewTask)}>
            <input type="text" {...register("title")} />
            <input type="file" {...register("image")} />
            <p>{errors?.image?.message.toString()}</p>
            <button type="submit">Criar</button>
        </form>
    )
}