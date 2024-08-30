import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';

import AuthPage from './page/AuthPage'; // นำเข้า AuthPage

const elements = createRoutesFromElements(
    <Route>
        <Route path="/" element={<p>Home!!!</p>} />
        <Route path="auth" element={<AuthPage />} />
    </Route>
);

const router = createBrowserRouter(elements);

export default router;
