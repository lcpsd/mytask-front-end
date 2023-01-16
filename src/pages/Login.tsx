import { FormProps, Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../schemas/login";
import { useFormResolver } from "../hooks/useFormResolver";
import { useApi } from "../hooks/useApi";
import axios from "axios";
import { useUser } from "../context/auth";
import { useEffect } from "react";

export function Login() {

    const { user, handleSignIn } = useUser()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        errors
    } = useFormResolver(loginSchema)

    const bearer = localStorage.getItem("Bearer")

    useEffect(() => {
        if (bearer) {
            navigate("/dashboard")
        }
    }, [user])

    return (
        <form onSubmit={handleSubmit(handleSignIn)}>
            <p>Email</p>
            <input type="email" {...register("email")} />
            <p>{errors.email?.message.toString()}</p>

            <p>Senha</p>
            <input type="password" {...register("password")} />
            <p>{errors.password?.message.toString()}</p>

            <button type="submit">Entrar</button>
        </form>
    )
}