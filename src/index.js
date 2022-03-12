import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from "react-router-dom";
import store from './redux/store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
