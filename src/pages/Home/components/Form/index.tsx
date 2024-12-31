import { useFinance } from '../../../../shared/contexts/FinanceContext';
import { Invoice, InvoiceType, PaymentMethod } from '../../../../types/InvoiceType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../../types/Inputs';
import { maskCurrencyEvent } from '../../../../utils/format_value';
import { useState } from 'react';
import Input from './input';
import InvoicesService from '../../../../shared/api/invoicesService';
import { Loader } from '../../style';

interface IFormProps {
    closeModal: () => void;
}

function Form({ closeModal }: IFormProps) {
    const { handleAddTransaction } = useFinance();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const addTransaction = async (data: Inputs) => {
        setLoading(true);
        const { amount, date, description, invoice_type, payment_method } = data;

        const value = amount.replace('R$', '').replace('.', '').replace(',', '.');

        const transaction: Invoice = {
            amount: parseFloat(value),
            date: date,
            description: description,
            paymentMethod: payment_method as PaymentMethod,
            type: invoice_type as InvoiceType,
        };

        try {
            const { success, invoice } = await InvoicesService.create(transaction);
            if (success) {
                handleAddTransaction({ ...transaction, id: invoice.id });
                closeModal();
            }
        } catch {
            setError('Ocorreu um erro ao adicionar a transação. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const onSubmit: SubmitHandler<Inputs> = data => addTransaction(data);

    const [money, setMoney] = useState('R$ 0,00');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = maskCurrencyEvent(e.target.value);
        setMoney(formattedValue);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <div className="mb-4 text-red-500">
                    {error}
                </div>
            )}
            <Input isInput id="description" register={register} label="Descrição" required errors={errors} />
            <Input isInput id="amount" value={money} register={register} label="Valor" required={false} errors={errors} handleChange={handleChange} />
            <Input isInput id="date" register={register} label="Data" type="date" required errors={errors} />
            <Input isInput={false} id="payment_method" register={register} label="Forma de Pagamento" enum={PaymentMethod} required errors={errors} />
            <Input isInput={false} id="invoice_type" register={register} label="Tipo" enum={InvoiceType} required errors={errors} />
            <div className="flex justify-end">
                <button
                    type="submit"
                    className={'px-4 py-2 rounded mr-2 bg-blue-custom text-white'}
                    disabled={loading}
                >
                    {loading ? <Loader /> : 'Adicionar'}
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
}


export default Form;
