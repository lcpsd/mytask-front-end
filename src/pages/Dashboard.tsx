import { api } from "../config/axios"
import { useUser } from "../context/auth"
import { useApi } from "../hooks/useApi"

export function Dashboard() {

    const { logOut } = useApi()
    const { user } = useUser()

    async function handleGetUser() {
        const res = await api.get(`/user/${user.id}`)
        console.log(res)
    }

    return (
        <div>
            <button onClick={handleGetUser}>GET</button>
            <button onClick={logOut}>Sair</button>
        </div>
    )
}