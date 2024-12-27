import { useEffect } from 'react';
import { useFinance } from '../../contexts/FinanceContext';
import { MainStyle } from './style';
import { data } from '../../../utils/dummy';


interface MainProps {
    children: React.ReactNode;
}

function Main({ children }: MainProps) {
    const { handleTransactions } = useFinance();


    useEffect(() => {
        handleTransactions(data);
    }, [handleTransactions]);

    return (
        <MainStyle>
            {children}
        </MainStyle>
    );
}

export default Main;
