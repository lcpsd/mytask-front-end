import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/auth";

export function Protected({ children }) {

    const { user } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [user])

    if (user) {
        return children
    }
}