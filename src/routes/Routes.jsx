import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';
import Login from '../components/Login';
import PrivetRoute from '../components/PrivetRoute';
import Profile from '../components/Profile';
import SignUp from '../components/SignUp';
import Statistic from '../components/Statistic';
import MainLayout from '../layouts/MainLayout';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: (
                    <PrivetRoute>
                        <About />
                    </PrivetRoute>
                )
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/signin',
                element: <Login />
            },
            {
                path: '/profile',
                element: (
                    <PrivetRoute>
                        <Profile />
                    </PrivetRoute>
                )
            },
            {
                path: '/statistic',
                element: (
                    <PrivetRoute>
                        <Statistic />
                    </PrivetRoute>
                )
            }
        ]
    }
]);

export default routes;
