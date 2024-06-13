import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import Layout from '../components/Layout';
import MainPage from '../components/pages/MainPage';
import ChairsPage from '../components/pages/ChairsPage';
import OneChairPage from '../components/pages/OneChairPage';
import SignupPage from '../components/pages/SignupPage';
import ProtectedRoute from '../components/hoc/ProtectedRoute';

export default function useAppRoutes(): RouteObject[] {
  const status = useAppSelector((store) => store.auth.user.status);
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
            <ProtectedRoute isAllowed={status === 'guest'}>
              <SignupPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ];
  return routes;
}
