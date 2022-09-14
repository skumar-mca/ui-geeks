import React from 'react';
import { HashRouter } from 'react-router-dom';
import './app.scss';
import AppRouter from './routes/routes';

const App = () => {
  return (
    <HashRouter>
      <div className='app-body'>
        <AppRouter />
      </div>
    </HashRouter>
  );
};

export default App;
