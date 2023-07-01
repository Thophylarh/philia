import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, Home, NotFound } from '@/pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        hasErrorBoundary: true,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
