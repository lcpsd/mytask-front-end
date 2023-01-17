import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { TaskProps } from "../types/task";

interface TaskContextProps {
    tasks: TaskProps[];
    setTasks: Dispatch<SetStateAction<TaskProps[]>>
    page: number;
    setPage: (page: number) => void;
}

const TaskContext = createContext<TaskContextProps>({} as TaskContextProps)

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState<TaskProps[]>([])
    const [page, setPage] = useState(0)

    return (
        <TaskContext.Provider value={{ page, setPage, tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTask() {
    return useContext(TaskContext)
}