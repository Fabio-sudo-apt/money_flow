export enum InvoiceType {
    INCOME = 'INCOME',
    EXPENSE = 'EXPENSE'
}

export enum PaymentMethod {
    CREDIT_CARD = 'Cartão de crédito',
    DEBIT_CARD = 'Cartão de débito',
    TICKET = 'Boleto',
    PIX = 'Pix'
}

export type Invoice = {
    id: number;
    description: string;
    amount: number;
    date: string;
    paymentMethod: PaymentMethod;
    type: InvoiceType;
}
