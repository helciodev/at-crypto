import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store';

import App from './App';
import 'antd/dist/antd.css';
console.log(store.getState());
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>, document.getElementById('root')
);


