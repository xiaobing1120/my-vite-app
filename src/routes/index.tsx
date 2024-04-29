import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';
import Layouts from '@/layouts'

const Home = lazy(() => import('@/pages/Home'));
const Test = lazy(() => import('@/pages/Test'));

const routes = [
  // 默认路由
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/test',
        element: <Test />
      },
    ]
  },
];

const router = createBrowserRouter(routes)

const Routes = () => {
  return <RouterProvider router={router} />
}


export default Routes;
