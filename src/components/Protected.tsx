import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/auth";

export function Protected({ children }) {

    const navigate = useNavigate()

    const { user } = useUser()

    const bearer = localStorage.getItem("bearer")

    useEffect(() => {
        if (!bearer) {
            navigate("/")
        }
    }, [user])

    if (bearer) {
        return children
    }
}