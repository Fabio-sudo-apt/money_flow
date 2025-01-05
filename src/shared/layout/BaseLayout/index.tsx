import { Footer, Header, Main } from '../../components';
import { FinanceProvider } from '../../contexts/FinanceContext';

import { BaseLauyoutStyle } from './style';

interface BaseLayoutProps {
    children: React.ReactNode;
}

function BaseLauyout({ children }: BaseLayoutProps) {
    return (
        <BaseLauyoutStyle>
            <Header />
            <FinanceProvider>
                <Main>
                    {children}
                </Main>
            </FinanceProvider>
            <Footer />
        </BaseLauyoutStyle>
    );
}

export default BaseLauyout;
