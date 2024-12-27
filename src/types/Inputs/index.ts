import { InvoiceType, PaymentMethod } from '../InvoiceType';

export type Inputs = {
    [key: string]: string | PaymentMethod | InvoiceType;

};
