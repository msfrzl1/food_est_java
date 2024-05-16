import LoginPage from '../../pages/loginPage';
import MenuDetailPage from '../../pages/menuDetailPage';
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
   {
      path: `menus/:id`,
      element: <MenuDetailPage />,
   },
];
