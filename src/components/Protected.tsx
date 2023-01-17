import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/auth";

export function Protected({ children }) {

    const navigate = useNavigate()

    const { user } = useUser()

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [user])

    if (user) {
        return children
    }
}