import { useEffect } from "react"
import { useTask } from "../context/task"
import { useTaskHook } from "../hooks/useTask"

export function TaskList() {

    const { tasks, setTasks, page } = useTask()

    const { getManyTasks } = useTaskHook()

    async function handleGetUserTasks() {
        const { data, meta } = await getManyTasks(page)

        setTasks(data)
    }

    useEffect(() => {
        handleGetUserTasks()
    }, [])

    return (
        <ul>
            {
                tasks.map(task => (
                    <>
                        <li key={task.id}>{task.title}</li>
                        <img src={`${import.meta.env.VITE_BASE_URL}/public/${task.image}`} />
                    </>
                ))
            }
        </ul>
    )
}