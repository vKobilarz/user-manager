import { Navigate, createBrowserRouter } from 'react-router-dom';
import UserListPage from '../../pages/UserList';
import UserFormPage from '../../pages/UserForm';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/user/list" />,
  },
  {
    path: '/user/list',
    element: <UserListPage />,
  },
  {
    path: '/user/create',
    element: <UserFormPage />,
  },
  {
    path: '/user/update/:id',
    element: <UserFormPage />,
  },
]);

export default routes;
