import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/auth";

export function Protected({ children }) {

    const navigate = useNavigate()

    const { user } = useUser()

    const Bearer = localStorage.getItem("Bearer")

    useEffect(() => {
        if (!Bearer) {
            navigate("/")
        }
    }, [user])

    if (Bearer) {
        return children
    }
}