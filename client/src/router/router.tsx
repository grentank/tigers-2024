import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../components/pages/MainPage';
import ChairsPage from '../components/pages/ChairsPage';
import OneChairPage from '../components/pages/OneChairPage';
import SignupPage from '../components/pages/SignupPage';
import ProtectedRoute from '../components/hoc/ProtectedRoute';
import { store } from '../redux/store';

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/chairs',
        element: <ChairsPage />,
      },
      {
        path: '/chairs/:chairId',
        element: <OneChairPage />,
      },
      {
        path: '/auth/signup',
        element: (
          <ProtectedRoute
            isAllowed={store.getState().auth.user.status === 'guest'}
          >
            <SignupPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
