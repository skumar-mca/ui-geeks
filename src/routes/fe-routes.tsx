import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import JSArrays from '../components/fe/javascript/arrays/arrays';
import JSClass from '../components/fe/javascript/class/class';
import JSConsole from '../components/fe/javascript/console/console';
import JSControlStructures from '../components/fe/javascript/control-structures/control-structures';
import JSExceptionHandling from '../components/fe/javascript/exception-handling/exception-handling';
import JSArrowFunctions from '../components/fe/javascript/functions/arrow-functions/arrow-functions';
import JSFunctionClosures from '../components/fe/javascript/functions/closures/closures';
import JSFunctions from '../components/fe/javascript/functions/function';
import JSGrammer from '../components/fe/javascript/grammer/grammer';
import JSHoisting from '../components/fe/javascript/hoisting/hoisting';
import JSInclude from '../components/fe/javascript/include-javascript/include-javascript';
import JSIteratorsGenerators from '../components/fe/javascript/iterators-generators/iterators-generators';
import JSModules from '../components/fe/javascript/modules/modules';
import JSObjects from '../components/fe/javascript/objects/objects';
import JSOperators from '../components/fe/javascript/operators/operators';
import JSPrototypeChain from '../components/fe/javascript/prototype-chain/prototype-chain';
import JSScriptLoading from '../components/fe/javascript/script-loading/script-loading';
import JSStrictMode from '../components/fe/javascript/strict-mode/strict-mode';
import JSTypes from '../components/fe/javascript/the-types/the-types';
import JSThis from '../components/fe/javascript/this/this';

const JSIntroduction = lazy(
  () => import('../components/fe/javascript/introduction/introduction')
);
const FEHome = lazy(() => import('../components/fe/fe-home/fe-home'));
const JSHome = lazy(
  () => import('../components/fe/javascript/javascript-home')
);

const JSHistory = lazy(
  () => import('../components/fe/javascript/history/history')
);

const FERouter = (
  <>
    <Route path='/fe' element={<JSIntroduction />} />
    <Route path='fe/javascript' element={<JSHome />}>
      <Route path='introduction' element={<JSIntroduction />} />
      <Route path='history' element={<JSHistory />} />
      <Route path='include-code' element={<JSInclude />} />
      <Route path='console' element={<JSConsole />} />
      <Route path='data-types' element={<JSTypes />} />
      <Route path='grammer' element={<JSGrammer />} />
      <Route path='operators' element={<JSOperators />} />
      <Route path='control-structures' element={<JSControlStructures />} />
      <Route path='objects' element={<JSObjects />} />
      <Route path='arrays' element={<JSArrays />} />
      <Route path='functions' element={<JSFunctions />} />
      <Route path='closures' element={<JSFunctionClosures />} />
      <Route path='arrow-functions' element={<JSArrowFunctions />} />
      <Route path='modules' element={<JSModules />} />
      <Route path='script-loading-strategies' element={<JSScriptLoading />} />
      <Route path='this-keyword' element={<JSThis />} />
      <Route path='class-keyword' element={<JSClass />} />
      <Route path='prototype-chain' element={<JSPrototypeChain />} />
      <Route path='strict-mode' element={<JSStrictMode />} />
      <Route path='hoisting' element={<JSHoisting />} />
      <Route path='exception-handling' element={<JSExceptionHandling />} />
      <Route
        path='iterators-and-generators'
        element={<JSIteratorsGenerators />}
      />
    </Route>
  </>
);

export default FERouter;
