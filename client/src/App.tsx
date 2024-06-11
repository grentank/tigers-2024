import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { getAllChairs } from './redux/slices/chairs/chairThunks';
import { useAppDispatch } from './redux/hooks';
import SimpleChairSnackbar from './components/ui/SimpleChairSnackbar';
// import ChairsProvider from './contexts/ChairsProvider';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getAllChairs());
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <SimpleChairSnackbar />
    </>
  );
}

export default App;
