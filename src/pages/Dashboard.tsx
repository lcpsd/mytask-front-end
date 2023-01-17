import { Header } from "../components/Header"
import { NewTaskInput } from "../components/NewTaskInput"
import { TaskList } from "../components/TaskList"

export function Dashboard() {

    return (
        <div>
            <Header />
            <NewTaskInput />
            <TaskList />
        </div>
    )
}