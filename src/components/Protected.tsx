import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Protected({ children }) {

    const navigate = useNavigate()

    const bearer = localStorage.getItem("Bearer")

    useEffect(() => {
        if (!bearer) {
            navigate("/")
        }
    }, [bearer])

    if (bearer) {
        return children
    }
}