import { useNavigate } from "react-router-dom";
import { loginSchema } from "../schemas/login";
import { useFormResolver } from "../hooks/useFormResolver";
import { useUser } from "../context/auth";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export function Login() {

    const { user } = useUser()
    const { signIn } = useAuth()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        errors
    } = useFormResolver(loginSchema)

    const Bearer = localStorage.getItem("Bearer")

    useEffect(() => {
        if (Bearer) {
            navigate("/dashboard")
        }
    }, [user])

    return (
        <form onSubmit={handleSubmit(signIn)}>
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