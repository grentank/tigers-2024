import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  children?: JSX.Element;
  isAllowed: boolean;
  redirectTo?: string;
};

export default function ProtectedRoute({
  children,
  isAllowed,
  redirectTo = '/',
}: ProtectedRouteProps): JSX.Element {
  if (!isAllowed) return <Navigate to={redirectTo} replace />;
  return children || <Outlet />;
}
