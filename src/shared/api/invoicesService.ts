import { Invoice } from '../../types/InvoiceType';
import axiosInstance from './axiosInstance';


class InvoiceService {
    async getAll(): Promise<Invoice[]> {
        const result = await axiosInstance.get('/invoices');
        const { invoices } = result.data;
        return invoices;
    }

    async create(data: Invoice): Promise<{ success: boolean, invoice: Invoice }> {
        const result = await axiosInstance.post('/invoice', {
            description: data.description,
            amount: data.amount,
            date: data.date,
            paymentMethod: data.paymentMethod,
            type: data.type,
        });
        const { success, invoice } = result.data;
        return { success, invoice };
    }

    async delete(id: number): Promise<boolean> {
        const result = await axiosInstance.delete(`/invoice/${id}`);
        return result.status >= 200 && result.status < 300;
    }
}

export default new InvoiceService;
