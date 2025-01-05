import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from '../../assets/image/logo_1.png';
import { useAuth } from '../../shared/contexts/AuthContext';
import { Inputs } from '../../types/Inputs';
import Input from '../Home/components/Form/input';
import { ButtonAddStyle } from './style';

function SignIn() {
    const navigate = useNavigate();
    const { handleUserAuth, user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [loading, setLoading] = useState(false);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    if (user) {
        return <Navigate to="/home" replace />;
    }

    const handleLogin = async (data: Inputs) => {
        try {
            setLoading(true);
            await handleUserAuth(data.email, data.password);
            navigate('/home');

        } catch (error: any) {
            setErrorMessages(error?.errors ?? ['Erro ao realizar login']);
        } finally {
            setLoading(false);
        }
    };

    const onSubmit: SubmitHandler<Inputs> = data => handleLogin(data);

    return (
        <div className="flex min-h-screen w-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
            <div className="flex justify-center mb-4">
                <img src={logo} alt="logo" className="flex justify-center mb-2 w-96" />
            </div>
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    {errorMessages.length > 0 && (
                        <div className="text-red-500 text-sm text-center space-y-1">
                            {errorMessages.map((message, index) => (
                                <p key={index}>{message}</p>
                            ))}
                        </div>
                    )}
                    <div className="mt-8">
                        <Input isInput id="email" register={register} label="Email" required errors={errors} />
                    </div>

                    <div className="mt-8">
                        <Input isInput id="password" type="password" register={register} label="Senha" required errors={errors} />
                    </div>

                    <div>
                        <ButtonAddStyle
                            onClick={handleSubmit(onSubmit)}
                            type="button"
                            className="flex w-full justify-center rounded-md px-3 py-1.5"
                        >
                            {loading ? 'Carregando...' : 'Entrar'}
                        </ButtonAddStyle>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
