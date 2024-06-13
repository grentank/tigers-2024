import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getAllChairs } from './redux/slices/chairs/chairThunks';
import { useAppDispatch } from './redux/hooks';
import SimpleChairSnackbar from './components/ui/SimpleChairSnackbar';
import { checkAuthThunk } from './redux/slices/auth/authThunks';
import useAppRoutes from './router/useAppRoutes';
import MyModal from './components/ui/MyModal';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getAllChairs());
    void dispatch(checkAuthThunk());
  }, []);

  const routes = useAppRoutes();
  const router = createBrowserRouter(routes);

  // if (status === 'pending') return <h1>Loading</h1>;

  return (
    <>
      <RouterProvider router={router} />
      <SimpleChairSnackbar />
      <MyModal />
    </>
  );
}

export default App;
