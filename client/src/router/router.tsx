import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../components/pages/MainPage';
import ChairsPage from '../components/pages/ChairsPage';
import OneChairPage from '../components/pages/OneChairPage';

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
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
