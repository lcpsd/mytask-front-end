export interface NewTaskProps {
    userId: string;
    title: string;
    image?: File;
}

export interface TaskProps {
    id: string;
    title: string;
    image: string;
    status: string;
    user_id: string;
}