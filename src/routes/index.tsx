import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import BaseLayout from '../shared/layout/BaseLayout';
import ProtectedLayout from '../shared/layout/ProtectedLayout';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/"
                element={
                    <SignIn />
                } />

            <Route
                path="/home"
                element={
                    <ProtectedLayout>
                        <BaseLayout>
                            <Home />
                        </BaseLayout>
                    </ProtectedLayout>
                }
            />
        </Routes>
    );
}

export default AppRoutes;
