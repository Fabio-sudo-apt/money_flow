import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import BaseLayout from '../shared/layout/BaseLayout';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<BaseLayout><Home /></BaseLayout>} />
        </Routes>
    );
}

export default AppRoutes;
