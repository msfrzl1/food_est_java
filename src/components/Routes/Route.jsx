import LoginPage from '../../pages/loginPage';
import MenuPage from '../../pages/menuPage';
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
   {
      path: '/menus',
      element: <MenuPage />,
   },
];
