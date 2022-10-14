import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const FEHome = lazy(() => import('../components/fe/fe-home/fe-home'));
const JSRoutes = lazy(() => import('./js-routes'));
const ReactRoutes = lazy(() => import('./react-routes'));

const FERouter = (
  <>
    <Route path='/' element={<FEHome />} />
    <Route path='/javascript/*' element={<JSRoutes />} />
    <Route path='/react/*' element={<ReactRoutes />} />
  </>
);

export default FERouter;
