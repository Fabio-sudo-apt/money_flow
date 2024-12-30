import { useState } from 'react';
import { FaBrazilianRealSign, FaCircleArrowDown, FaCircleArrowUp } from 'react-icons/fa6';
import { IoAddCircle } from 'react-icons/io5';
import { useFinance } from '../../shared/contexts/FinanceContext';
import { color_primary, color_red, color_white } from '../../themes/colors';
import Card from './components/Card';
import Model from './components/Modal';
import TaskTable from './components/TaskTable';
import { ButtonAddStyle, ContainerStyle, SectionStyle, SpanStyle } from './style';

function Home() {
    const { transactions, totalIncome, totalExpense, total, handleDeleteTransaction } = useFinance();

    const [isOpen, setOpenModel] = useState(false);

    const openModal = () => setOpenModel(true);

    const closeModal = () => setOpenModel(false);

    return (
        <>
            <SectionStyle>
                <Card title="Entradas" value={totalIncome} icon={FaCircleArrowUp} fontSizeIcon={20} colorIcon={color_primary} />
                <Card title="Despesas" value={totalExpense} icon={FaCircleArrowDown} fontSizeIcon={20} colorIcon={color_red} />
                <Card title="Total" colorText={color_white} backgroundColor={color_primary} value={total} icon={FaBrazilianRealSign} fontSizeIcon={20} colorIcon={color_white} />
            </SectionStyle>
            <SectionStyle>
                <ContainerStyle>
                    <div>
                        <ButtonAddStyle onClick={() => { openModal(); }}>
                            <IoAddCircle />
                            <SpanStyle>Nova Transação</SpanStyle>
                        </ButtonAddStyle>
                    </div>
                    <TaskTable data={transactions} handleDeleteTransaction={handleDeleteTransaction} />
                </ContainerStyle>
            </SectionStyle>
            {isOpen && <SectionStyle>
                <Model closeModal={closeModal}/>
            </SectionStyle>}
        </>
    );
}

export default Home;
