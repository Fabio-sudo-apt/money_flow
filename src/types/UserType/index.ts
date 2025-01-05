export type User = {
    id: number;
    name: string;
    email: string;
    type: 'ADMIN' | 'USER';
    token?: string;
};

export type UserResponse = {
    success?: boolean;
    token?: string;
    user?: User | null;
    errors?: string[];
}
