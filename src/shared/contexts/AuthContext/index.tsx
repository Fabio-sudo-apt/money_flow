/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { User } from '../../../types/UserType';
import invoicesService from '../../api/invoicesService';
import { removeCookies, setCookies } from '../../../utils/cookies';


interface IAuthContextData {
    user: User | null;
    handleUserAuth: (email: string, password: string) => Promise<void>;
    handleUserLogout: () => void;
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


    const verifyToken = useCallback(async () => {
        const response = await invoicesService.verifyToken();

        if (response.success && response.user) {
            setUser(response.user);
        } else {
            handleUserLogout();
        }
    }, []);

    useEffect(() => {
        async function verify() {
            await verifyToken();
        }

        verify();
    }, [verifyToken]);

    async function handleUserAuth(email: string, password: string) {
        const response = await invoicesService.loginRequest(email, password);

        if (response.success && response.user && response.token) {
            setCookies('token', response.token);
            setUser(response.user);
        } else {
            throw { erros: response.errors };
        }
    }

    function handleUserLogout() {
        setUser(null);
        removeCookies('token');
    }

    return (
        <AuthContext.Provider value={{ user, handleUserAuth, handleUserLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
