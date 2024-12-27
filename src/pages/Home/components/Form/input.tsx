import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Inputs } from '../../../../types/Inputs';

interface IInputProps {
    isInput: boolean;
    id: string;
    label: string;
    required: boolean;

    type?: string;
    value?: string;
    enum?: { [key: string]: string };

    errors: FieldErrors<Inputs>;

    register: UseFormRegister<Inputs>;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ isInput, id, value, label, register, required = false, type = 'text', errors, handleChange, enum: enumProp }: IInputProps) {
    return (
        <div className="mb-4">
            {isInput ? (
                <>
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
                    <input
                        id={id}
                        type={type}
                        value={value}
                        {...register(id, {
                            required: required,
                            validate: (value) => {
                                if (id === 'amount') {
                                    return value !== '' || 'Amount cannot be empty';
                                }
                            }
                        })}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors[id]?.type === 'required' && <span className="text-red-500 font-light text-sm">Campos obrigatório</span>}
                </>
            ) : <>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
                <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    id={id} {...register(id, { required: required })}>
                    {enumProp && Object.entries(enumProp).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
            </>}
        </div>
    );
};

export default Input;
