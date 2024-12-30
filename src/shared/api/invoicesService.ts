import { Invoice } from '../../types/InvoiceType';
import axiosInstance from './axiosInstance';


class InvoiceService {
    async getAll(): Promise<Invoice[]> {
        const result = await axiosInstance.get('/invoices');
        const { invoices } = result.data;
        return invoices;
    }
}

export default new InvoiceService;
