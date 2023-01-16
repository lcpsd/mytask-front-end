import { api } from "../config/axios"
import { useUser } from "../context/auth"
import { useApi } from "../hooks/useApi"

export function Dashboard() {

    const { handleLogOut } = useUser()
    const { user } = useUser()

    async function handleGetUser() {
        const res = await api.get(`/user/${user.id}`)
        console.log(res)
    }

    return (
        <div>
            <button onClick={handleGetUser}>GET</button>
            <button onClick={handleLogOut}>Sair</button>
        </div>
    )
}