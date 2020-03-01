import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './App.css';

import Routes from './Routes';
import createStore from './createStore';
import rootSaga from './rootSaga';
import { GlobalStyle, theme } from './theme';

const { runSaga, store } = createStore;

runSaga(rootSaga);
const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;
