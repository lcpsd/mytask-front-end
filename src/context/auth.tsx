import { createContext, useContext, useState } from "react";


interface AuthContextProps {
    user: UserProps | undefined;
    setUser: (props: UserProps) => void;
}

const UserContext = createContext<AuthContextProps>(undefined)

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