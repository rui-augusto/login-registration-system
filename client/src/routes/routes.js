import { useRoutes } from 'react-router-dom';

import { Login } from ".././screens/Login";
import { Register } from ".././screens/Register";
import { Home } from ".././screens/Home";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Login />},
        {path: '/register', element: <Register />},
        {path: "home/:id", element: <Home />}
    ]);
}