import axios from 'axios';
import { Invoice } from '../../types/InvoiceType';
import { UserResponse } from '../../types/UserType';
import axiosInstance from './axiosInstance';

class InvoiceService {
    async loginRequest(email: string, password: string): Promise<UserResponse> {
        try {
            const response = await axiosInstance.post('/user/auth', { email, password });
            const { success, user } = response.data;
            return { success, user };
        } catch (error: unknown) {
            const defaultErrorMessage = 'Ocorreu um erro inesperado. Tente novamente mais tarde.';
            let errorMessage = defaultErrorMessage;

            if (axios.isAxiosError(error)) {
                errorMessage = error.response?.data?.errors?.join(', ') || error.message || defaultErrorMessage;
            }

            return { success: false, errors: [errorMessage] };
        }
    }

    async verifyToken(): Promise<UserResponse> {
        try {
            const response = await axiosInstance.get('/user/verify', { withCredentials: true });
            const { success, user } = response.data;
            return { success, user };
        } catch (error: unknown) {
            const defaultErrorMessage = 'Ocorreu um erro inesperado. Tente novamente mais tarde.';
            let errorMessage = defaultErrorMessage;

            if (axios.isAxiosError(error)) {
                errorMessage = error.response?.data?.errors?.join(', ') || error.message || defaultErrorMessage;
            }

            return { success: false, errors: [errorMessage] };
        }
    }

    async getAll(): Promise<Invoice[]> {
        const result = await axiosInstance.get('/invoices', { withCredentials: true });
        const { invoices } = result.data;
        return invoices;
    }

    async create(data: Invoice): Promise<{ success: boolean, invoice: Invoice }> {
        const result = await axiosInstance.post('/invoice',
            {
                description: data.description,
                amount: data.amount,
                date: data.date,
                paymentMethod: data.paymentMethod,
                type: data.type,
            },
            { withCredentials: true }
        );
        const { success, invoice } = result.data;
        return { success, invoice };
    }

    async delete(id: number): Promise<boolean> {
        const result = await axiosInstance.delete(`/invoice/${id}`, { withCredentials: true });
        return result.status >= 200 && result.status < 300;
    }
}

export default new InvoiceService();

