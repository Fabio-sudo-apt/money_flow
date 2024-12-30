import { useCallback, useEffect } from 'react';
import invoicesService from '../../api/invoicesService';
import { useFinance } from '../../contexts/FinanceContext';
import { MainStyle } from './style';


interface MainProps {
    children: React.ReactNode;
}

function Main({ children }: MainProps) {
    const { handleTransactions } = useFinance();

    const fetchData = useCallback(async () => {
        const result = await invoicesService.getAll();
        handleTransactions(result);
    }, [handleTransactions]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <MainStyle>
            {children}
        </MainStyle>
    );
}

export default Main;
