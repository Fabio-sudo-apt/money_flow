import { MainStyle } from './style';

interface MainProps {
    children: React.ReactNode;
}

function Main({ children }: MainProps) {
    return (
        <MainStyle>
            {children}
        </MainStyle>
    );
}

export default Main;
