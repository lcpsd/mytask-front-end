interface UserProps {
    id: string;
    email: string;
    name: string;
    token: string;
}

interface UserLoginProps {
    email: string;
    password: string;
}

interface AxiosUserLogin {
    data: UserProps
}