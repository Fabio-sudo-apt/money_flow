import { Invoice } from '../../types/InvoiceType';
import axiosInstance from './axiosInstance';


class InvoiceService {
    async getAll(): Promise<Invoice[]> {
        const result = await axiosInstance.get('/invoices');
        const { invoices } = result.data;
        return invoices;
    }

    async create(data: Invoice): Promise<boolean> {
        const result = await axiosInstance.post('/invoice', {
            description: data.description,
            amount: data.amount,
            date: data.date,
            paymentMethod: data.paymentMethod,
            type: data.type,
        });
        const { success } = result.data;
        return success;
    }
}

export default new InvoiceService;
