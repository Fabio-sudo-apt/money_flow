/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { Invoice, InvoiceType } from '../../../types/InvoiceType';
import { formatTypeInvoice } from '../../../utils/format_value';

interface IFinanceContextData {
    transactions: Invoice[];
    handleTransactions: (transactions: Invoice[]) => void;

    totalIncome: number;
    totalExpense: number;
    total: number;

    handleAddTransaction: (transaction: Invoice) => void;

    handleDeleteTransaction: (id: number) => void;
};

interface IFinanceProviderProps {
    children: ReactNode;
}

const FinanceContext = createContext<IFinanceContextData>({
    transactions: [],
    handleTransactions: () => { },
    totalIncome: 0,
    totalExpense: 0,
    total: 0,
    handleAddTransaction: () => { },
    handleDeleteTransaction: () => { },
});

export const useFinance = () => {
    return useContext(FinanceContext);
};


export const FinanceProvider = ({ children }: IFinanceProviderProps): JSX.Element => {
    const [transactions, setTransactions] = useState<Invoice[]>([]);

    const handleTransactions = useCallback((transactions: Invoice[]) => {
        setTransactions(transactions);
    }, []);

    const totalIncome = transactions.reduce((acc, transaction) => {
        const type = formatTypeInvoice(transaction.type);
        return type === InvoiceType.INCOME ? acc + transaction.amount : acc;
    }, 0);

    const totalExpense = transactions.reduce((acc, transaction) => {
        const type = formatTypeInvoice(transaction.type);
        return type === InvoiceType.EXPENSE ? acc + transaction.amount : acc;
    }, 0);

    const total = transactions.reduce(() => {
        return totalIncome - totalExpense;
    }, 0);

    const handleAddTransaction = useCallback((transaction: Invoice) => {
        setTransactions([...transactions, transaction]);
    }, [transactions]);

    const handleDeleteTransaction = useCallback((id: number) => {
        const newTransactions = transactions.filter(transaction => transaction.id !== id);
        setTransactions(newTransactions);
    }, [transactions]);


    return (
        <FinanceContext.Provider value={{ transactions, handleTransactions, totalIncome, totalExpense, total, handleAddTransaction, handleDeleteTransaction }}>
            {children}
        </FinanceContext.Provider>
    );
};
