import { useNavigate } from "react-router-dom";
import { loginSchema } from "../schemas/login";
import { useFormResolver } from "../hooks/useFormResolver";
import { useAuth } from "../hooks/useAuth";

export function Register() {

    const { register } = useAuth()
    const navigate = useNavigate()

    const {
        register: registerForm,
        handleSubmit,
        errors
    } = useFormResolver(loginSchema)


    async function handleRegister(formData: NewUserProps) {
        const res = await register(formData)
    }

    return (
        <form onSubmit={handleSubmit(handleRegister)}>

            <p>Nome</p>
            <input type="name" {...registerForm("name")} />
            <p>{errors.name?.message.toString()}</p>

            <p>E-mail</p>
            <input type="email" {...registerForm("email")} />
            <p>{errors.email?.message.toString()}</p>

            <p>Senha</p>
            <input type="password" {...registerForm("password")} />
            <p>{errors.password?.message.toString()}</p>

            <button type="submit">Registrar</button>
        </form>
    )
}