import CreateMenuPage from '../../pages/createMenuPage';
import LoginPage from '../../pages/loginPage';
import MenuDetailPage from '../../pages/menuDetailPage';
import MenuPage from '../../pages/menuPage';
import RegisterPage from '../../pages/registerPage';
import ProtectedRoute from './ProtectedRoute';

export const RouteList = [
   {
      path: '/',
      element: <LoginPage />,
   },
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
      element: (
         <ProtectedRoute>
            <MenuPage />
         </ProtectedRoute>
      ),
   },
   {
      path: `menus/:id`,
      element: (
         <ProtectedRoute>
            <MenuDetailPage />
         </ProtectedRoute>
      ),
   },
   {
      path: `menus/create-menu`,
      element: (
         <ProtectedRoute>
            <CreateMenuPage />
         </ProtectedRoute>
      ),
   },
];
