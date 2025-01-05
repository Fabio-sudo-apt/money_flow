/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { User } from '../../../types/UserType';
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '../../../utils/localStorage';
import InvoicesService from '../../api/invoicesService';

interface IAuthContextData {
    user: User | null;
    handleUserAuth: (email: string, password: string) => Promise<void>;
    handleUserLogout: () => void;
    validateToken: () => Promise<void>;
}

interface IAuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: IAuthProviderProps): JSX.Element => {
    const [user, setUser] = useState<User | null>(null);

    const validateToken = useCallback(async () => {
        const token = getLocalStorage('token');
        if (token) {
            try {
                const { success, user } = await InvoicesService.verifyToken(token);
                if (success && user) {
                    setUser(user);
                }
            } catch (error) {
                console.error('Token validation failed:', error);
            }
        }else{
            setUser(null);
        }
    }, []);

    useEffect(() => {
        const validate = async () => {
            await validateToken();
        };
        validate();
    }, [validateToken]);

    async function handleUserAuth(email: string, password: string) {
        const response = await InvoicesService.loginRequest(email, password);

        if (response.success && response.user) {
            const { token } = response;
            const user = { ...response.user, token };
            setUser(user);
            if (token) {
                setLocalStorage('token', token);
            }
        } else {
            throw { errors: response.errors ?? ['Erro ao realizar login'] };
        }
    }

    function handleUserLogout() {
        setUser(null);
        removeLocalStorage('token');
    }

    return (
        <AuthContext.Provider value={{ user, handleUserAuth, validateToken, handleUserLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
