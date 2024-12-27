import { Invoice } from '../../../../types/InvoiceType';
import Form from '../Form';

interface ModelProps {
    closeModal: () => void;
    addTransaction: (invoice: Invoice) => void;
}

function Model({ closeModal, addTransaction }: ModelProps) {
    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-70">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl mb-4">Adicionar Nova Transação</h2>
                <Form addTransaction={addTransaction} closeModal={closeModal}/>
            </div>
        </div>
    );
}

export default Model;
