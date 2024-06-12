import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { getAllChairs } from './redux/slices/chairs/chairThunks';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import SimpleChairSnackbar from './components/ui/SimpleChairSnackbar';
import { checkAuthThunk } from './redux/slices/auth/authThunks';
// import ChairsProvider from './contexts/ChairsProvider';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getAllChairs());
    void dispatch(checkAuthThunk());
  }, []);

  // const status = useAppSelector((store) => store.auth.user.status)
  // const routes: RouteObject[] = [
  //   {
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: '/',
  //         element: <MainPage />,
  //       },
  //       {
  //         path: '/chairs',
  //         element: <ChairsPage />,
  //       },
  //       {
  //         path: '/chairs/:chairId',
  //         element: <OneChairPage />,
  //       },
  //       {
  //         path: '/auth/signup',
  //         element: (
  //           <ProtectedRoute
  //             isAllowed={status === 'guest'}
  //           >
  //             <SignupPage />
  //           </ProtectedRoute>
  //         ),
  //       },
  //     ],
  //   },
  // ];
  
  // const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
      <SimpleChairSnackbar />
    </>
  );
}

export default App;
