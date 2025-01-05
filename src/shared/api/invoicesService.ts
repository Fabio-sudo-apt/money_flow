import axios from 'axios';
import { Invoice } from '../../types/InvoiceType';
import { UserResponse } from '../../types/UserType';
import axiosInstance from './axiosInstance';

class InvoiceService {
    async loginRequest(email: string, password: string): Promise<UserResponse> {
        try {
            const response = await axiosInstance.post('/user/auth', { email, password });
            const { success, token, user } = response.data;
            return { success, token, user };
        } catch (error: unknown) {
            const defaultErrorMessage = 'Ocorreu um erro inesperado. Tente novamente mais tarde.';
            let errorMessage = defaultErrorMessage;

            if (axios.isAxiosError(error)) {
                errorMessage = error.response?.data?.errors?.join(', ') || error.message || defaultErrorMessage;
            }

            return { success: false, errors: [errorMessage] };
        }
    }

    async verifyToken(token: string | null): Promise<UserResponse> {
        try {
            const response = await axiosInstance.get(`/user/verify/${token}`);
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

    async getAll(token: string | null): Promise<Invoice[]> {
        const result = await axiosInstance.get('/invoices',
            { headers: { Authorization: `Bearer ${token}` }, }
        );
        const { invoices } = result.data;
        return invoices;
    }

    async create(data: Invoice, token: string | null): Promise<{ success: boolean, invoice: Invoice }> {
        const result = await axiosInstance.post('/invoice',
            {
                description: data.description,
                amount: data.amount,
                date: data.date,
                paymentMethod: data.paymentMethod,
                type: data.type,
            },
            { headers: { Authorization: `Bearer ${token}` }, }
        );
        const { success, invoice } = result.data;
        return { success, invoice };
    }

    async delete(id: number, token: string | null): Promise<boolean> {
        const result = await axiosInstance.delete(`/invoice/${id}`, { headers: { Authorization: `Bearer ${token}` }, });
        return result.status >= 200 && result.status < 300;
    }
}

export default new InvoiceService();

