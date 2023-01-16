import { createContext, useContext, useState } from "react";


interface AuthContextProps {
    user: UserProps | null;
}

const UserContext = createContext<AuthContextProps>(null)

export function UserProvider({ children }) {

    const [user, setUser] = useState<UserProps | null>(null)

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}