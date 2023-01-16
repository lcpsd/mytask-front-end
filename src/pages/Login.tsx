import { FormProps, Link } from "react-router-dom";
import { loginSchema } from "../schemas/login";
import { useFormResolver } from "../hooks/useFormResolver";

export function Login() {

    const {
        register,
        handleSubmit,
        errors
    } = useFormResolver(loginSchema)

    const handleLogin = (data: FormProps) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <input type="email" {...register("email")} />
            <p>{errors.email?.message.toString()}</p>

            <input type="password" {...register("password")} />
            <p>{errors.password?.message.toString()}</p>

            <button type="submit">Entrar</button>
            <Link to="/register">
                <a>Criar Conta</a>
            </Link>
        </form>
    )
}