import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
    
} from 'react-router-dom';

import AuthPage from './page/AuthPage'; // นำเข้า AuthPage

import DashBoard from './page/Dashboard';
import Calendar from './page/dath';

const elements = createRoutesFromElements(
    <Route>
        <Route path="/" element={<p>HelloMaterfacker</p>} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="Calendar" element={<Calendar/>} />
    </Route>
);

const router = createBrowserRouter(elements);

export default router;
