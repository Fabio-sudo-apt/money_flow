/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { Invoice, InvoiceType } from '../../../types/InvoiceType';
import { formatTypeInvoice } from '../../../utils/format_value';
import InvoicesService from '../../api/invoicesService';


interface IFinanceContextData {
    transactions: Invoice[];
    handleTransactions: () => void;

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

    const handleTransactions = useCallback(async () => {
        const result = await InvoicesService.getAll();
        setTransactions(result);
    }, []);

    const totalIncome = useMemo(() => {
        return transactions.reduce((acc, transaction) => {
            const type = formatTypeInvoice(transaction.type);
            return type === InvoiceType.INCOME ? acc + transaction.amount : acc;
        }, 0);
    }, [transactions]);

    const totalExpense = useMemo(() => {
        return transactions.reduce((acc, transaction) => {
            const type = formatTypeInvoice(transaction.type);
            return type === InvoiceType.EXPENSE ? acc + transaction.amount : acc;
        }, 0);
    }, [transactions]);

    const total = useMemo(() => totalIncome - totalExpense, [totalIncome, totalExpense]);

    const handleAddTransaction = useCallback((transaction: Invoice) => {
        setTransactions((prevTransactions) => [...prevTransactions, transaction]);
    }, []);

    const handleDeleteTransaction = useCallback((id: number) => {
        setTransactions((prevTransactions) => prevTransactions.filter(transaction => transaction.id !== id));
    }, []);

    return (
        <FinanceContext.Provider value={{
            transactions,
            handleTransactions,
            totalIncome,
            totalExpense,
            total,
            handleAddTransaction,
            handleDeleteTransaction
        }}>
            {children}
        </FinanceContext.Provider>
    );
};
