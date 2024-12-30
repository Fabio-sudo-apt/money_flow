import Card from './components/Card';
import TaskTable from './components/TaskTable';
import Model from './components/Modal';
import { SectionStyle, ContainerStyle, ButtonAddStyle, SpanStyle } from './style';
import { FaCircleArrowUp, FaBrazilianRealSign, FaCircleArrowDown } from 'react-icons/fa6';
import { IoAddCircle } from 'react-icons/io5';
import { color_primary, color_white, color_red } from '../../themes/colors';
import { useFinance } from '../../shared/contexts/FinanceContext';
import { Invoice } from '../../types/InvoiceType';
import { useState } from 'react';

function Home() {
    const { transactions, totalIncome, totalExpense, total, handleAddTransaction, handleDeleteTransaction } = useFinance();

    const [isOpen, setOpenModel] = useState(false);

    const openModal = () => setOpenModel(true);

    const closeModal = () => setOpenModel(false);

    const addTransaction = (invoice: Invoice) => {
        const transaction: Invoice = {
            id: invoice.id,
            amount: invoice.amount,
            date: invoice.date,
            description: invoice.description,
            paymentMethod: invoice.paymentMethod,
            type: invoice.type,
        };
        handleAddTransaction(transaction);
        closeModal();
    };

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
                <Model closeModal={closeModal} addTransaction={addTransaction} />
            </SectionStyle>}
        </>
    );
}

export default Home;
