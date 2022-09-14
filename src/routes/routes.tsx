import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router';
import JSIntroduction from '../components/fe/javascript/introduction/introduction';
import FERouter from './fe-routes';

const AppRouter = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path='/' element={<JSIntroduction />} />
        {FERouter}
        <Route path='*' element={<p>There's nothing here!</p>} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
