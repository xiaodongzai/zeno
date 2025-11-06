import React from 'react';
import { RouterProvider } from 'react-router-dom';
import appRouter from './router';

const App: React.FC = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;