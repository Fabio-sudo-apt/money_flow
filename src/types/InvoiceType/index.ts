export enum InvoiceType {
    INCOME = 'Entrada',
    EXPENSE = 'Despesa'
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
    payment_method: PaymentMethod;
    type: InvoiceType;
}
