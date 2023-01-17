import { useEffect } from "react"
import { Header } from "../components/Header"
import { api } from "../config/axios"
import { useUser } from "../context/auth"

export function Dashboard() {

    return (
        <div>
            <Header />
        </div>
    )
}