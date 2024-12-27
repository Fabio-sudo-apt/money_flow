import { Invoice, InvoiceType, PaymentMethod } from '../../../../types/InvoiceType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../../types/Inputs';
import { maskCurrencyEvent } from '../../../../utils/format_value';
import { useState } from 'react';
import Input from './input';

interface IFormProps {
    closeModal: () => void;
    addTransaction: (invoice: Invoice) => void;
}

function Form({ closeModal, addTransaction }: IFormProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const handleAddTransaction = (data: Inputs) => {
        const { amount, date, description, invoice_type, payment_method } = data;

        const value = amount.replace('R$', '').replace('.', '').replace(',', '.');

        const transaction: Invoice = {
            id: Math.floor(Math.random() * 1000),
            amount: parseFloat(value),
            date: date,
            description: description,
            payment_method: PaymentMethod[payment_method as keyof typeof PaymentMethod],
            type: InvoiceType[invoice_type as keyof typeof InvoiceType],
        };

        addTransaction(transaction);
        closeModal();
    };

    const onSubmit: SubmitHandler<Inputs> = data => handleAddTransaction(data);

    const [money, setMoney] = useState('R$ 0,00');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = maskCurrencyEvent(e.target.value);
        setMoney(formattedValue);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input isInput id="description" register={register} label="Descrição" required errors={errors} />
            <Input isInput id="amount" value={money} register={register} label="Valor" required={false} errors={errors} handleChange={handleChange} />
            <Input isInput id="date" register={register} label="Data" type="date" required errors={errors} />
            <Input isInput={false} id="payment_method" register={register} label="Forma de Pagamento" enum={PaymentMethod} required errors={errors} />
            <Input isInput={false} id="invoice_type" register={register} label="Tipo" enum={InvoiceType} required errors={errors} />
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-custom text-white rounded mr-2"
                >
                    Adicionar
                </button>
                <button
                    type="button"
                    className="px-4 py-2 bg-red-custom text-white rounded"
                    onClick={closeModal}
                >
                    Fechar
                </button>
            </div>
        </form>
    );
};

export default Form;
