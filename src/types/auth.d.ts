interface UserProps {
    id: string;
    email: string;
    name: string;
    token: string;
}

interface localStorageUserProps {
    id: string;
    email: string;
    name: string;
}

interface UserLoginProps {
    email: string;
    password: string;
}

interface AxiosUserLoginProps {
    data: UserProps
}

interface AxiosUserRegisterProps {
    data: {
        id: string;
        email: string;
        name: string;
    }
}