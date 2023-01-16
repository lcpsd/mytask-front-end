import { createContext, useContext, useState } from "react";
import { useApi } from "../hooks/useApi"

interface AuthContextProps {
    user: UserProps | undefined;
    setUser: (props: UserProps) => void;
    handleSignIn: (formData: UserLoginProps) => Promise<void>
    handleLogOut: () => Promise<void>
}

const UserContext = createContext<AuthContextProps>(undefined)

export function UserProvider({ children }) {

    const [user, setUser] = useState<UserProps | null>(null)
    const { signIn, logOut } = useApi()

    async function handleSignIn(formData: UserLoginProps) {
        const { data } = await signIn(formData.email, formData.password)

        delete data.token
        setUser(data)
    }

    async function handleLogOut() {
        logOut()
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, setUser, handleSignIn, handleLogOut }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext)
}