import { useUser } from "../context/auth"
import { useAuth } from "../hooks/useAuth"

export function Header() {

    const { logOut } = useAuth()
    const { user } = useUser()

    return (
        <div>
            <h2>MyTask</h2>
            <div>
                <p>{user?.name.toString()}</p>
                <button onClick={logOut}>Sair</button>
                <button>Tema</button>
            </div>
        </div>
    )
}