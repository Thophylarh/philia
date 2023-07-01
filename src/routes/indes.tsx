import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@/pages';

const allRoutes = [
    {
        path: '/',
        element: <Home />,
    },
];

const router = createBrowserRouter(allRoutes);

export default router;
