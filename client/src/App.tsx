import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import ChairsProvider from './contexts/ChairsProvider';

function App(): JSX.Element {
  return (
    <ChairsProvider>
      <RouterProvider router={router} />
    </ChairsProvider>
  );
}

export default App;
