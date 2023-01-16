import { createContext, useContext, useState } from "react";


interface AuthContextProps {
    user: UserProps | null;
    setUser: (props: UserProps) => void;
}

const UserContext = createContext<AuthContextProps>(null)

export function UserProvider({ children }) {

    const [user, setUser] = useState<UserProps | null>(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext)
}