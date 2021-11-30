import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routing from './Route';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
