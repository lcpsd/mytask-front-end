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

    return (
        <form onSubmit={handleSubmit(createTask)}>
            <input type="text" {...register("title")} />
            <input type="file" {...register("image")} />
            <p>{errors?.image?.message.toString()}</p>
            <button type="submit"></button>
        </form>
    )
}