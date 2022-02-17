import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import store from './apiServices/store/store'
import { Provider } from 'react-redux'
import {BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

