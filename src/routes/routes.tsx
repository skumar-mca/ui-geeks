import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router';
import Home from '../components/home/home';
import HomeHeader from '../components/home/home-header/home-header';
import FERouter from './fe-routes';

const AppRouter = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <HomeHeader />
      <div className='yals-content-section'>
        <Routes>
          <Route path='/' element={<Home />} />
          {FERouter}
          <Route path='*' element={<p>There's nothing here!</p>} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default AppRouter;
