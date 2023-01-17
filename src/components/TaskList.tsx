import { useEffect, useState } from "react"
import { useTask } from "../context/task"
import { useTaskHook } from "../hooks/useTask"
import { TaskProps } from "../types/task"

export function TaskList() {

    const { tasks, setTasks, page } = useTask()

    const { getManyTasks } = useTaskHook()

    async function handleGetUserTasks() {
        const data = await getManyTasks(page)
        setTasks(data)
    }

    useEffect(() => {
        handleGetUserTasks()
    }, [])

    return (
        <ul>
            {
                tasks.map(task => (
                    <li>{task.title}</li>
                ))
            }
        </ul>
    )
}