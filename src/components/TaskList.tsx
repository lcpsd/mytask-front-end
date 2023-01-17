import { useEffect } from "react"
import { useTask } from "../context/task"
import { useTaskHook } from "../hooks/useTask"

export function TaskList() {

    const { tasks, setTasks, page } = useTask()

    const { getManyTasks, deleteTask } = useTaskHook()

    async function handleGetUserTasks() {
        const { data, meta } = await getManyTasks(page)

        setTasks(data)
    }

    async function handleDeleteTask(id: string) {
        await deleteTask(id)
        await handleGetUserTasks()
    }

    useEffect(() => {
        handleGetUserTasks()
    }, [])

    return (
        <ul>
            {
                tasks.map(task => (
                    <div key={task.id}>
                        <button onClick={() => handleDeleteTask(task.id)}>Del</button>
                        <li>{task.title}</li>
                        <img src={`${import.meta.env.VITE_BASE_URL}/public/${task.image}`} />
                    </div>
                ))
            }
        </ul>
    )
}