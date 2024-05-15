import LoginPage from '../../pages/loginPage';
import RegisterPage from '../../pages/registerPage';

export const RouteList = [
   {
      path: '/login',
      element: <LoginPage />,
   },
   {
      path: '/register',
      element: <RegisterPage />,
   },
];
