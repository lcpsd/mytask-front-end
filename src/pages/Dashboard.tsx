import { useApi } from "../hooks/useApi"

export function Dashboard() {

    const { logOut } = useApi()

    return (
        <div>
            <button onClick={logOut}>Sair</button>
        </div>
    )
}