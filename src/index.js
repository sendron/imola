import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as ReduxQueryProvider } from 'redux-query-react';
import App from './App';
import store from './store';

import './index.css';

export const getQueries = state => state.queries;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxQueryProvider queriesSelector={getQueries}>
        <App />
      </ReduxQueryProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);