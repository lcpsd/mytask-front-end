import { FieldValues } from "react-hook-form"
import { useFormResolver } from "../hooks/useFormResolver"
import { useTask } from "../hooks/useTask"
import { taskSchema } from "../schemas/task"

export function NewTaskInput() {

    const { createTask } = useTask()

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

        console.log(res)
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