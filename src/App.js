import React from 'react';

import { Router } from 'react-router-dom';

import history from './services/history';
import Routes from './routes/index';

import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;