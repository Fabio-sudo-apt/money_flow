export type User = {
    id: number;
    name: string;
    email: string;
    type: 'ADMIN' | 'USER';
};

export type UserResponse = {
    success?: boolean;
    user?: User | null;
    token?: string;
    errors?: string[];
}
