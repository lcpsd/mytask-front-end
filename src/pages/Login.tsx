import { FormProps, Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../schemas/login";
import { useFormResolver } from "../hooks/useFormResolver";
import { useApi } from "../hooks/useApi";
import axios from "axios";
import { useUser } from "../context/auth";
import { useEffect } from "react";

export function Login() {

    const { signIn } = useApi()
    const { setUser, user } = useUser()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        errors
    } = useFormResolver(loginSchema)


    async function handleLogin(formData: UserLoginProps) {
        const { data } = await signIn(formData.email, formData.password)
        axios.defaults.headers.common["Bearer"] = data.token

        delete data.token
        setUser(data)
    }

    useEffect(() => {
        if (user) {
            navigate("/dashboard")
        }
    }, [user])

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
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