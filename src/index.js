import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './scss/main.scss';

/*
if (module.hot) {
  module.hot.accept
};
*/

const store = createStore({});

render(
  <Provider store={store}>
    <p>hi</p>
  </Provider>,
  document.getElementById('root'),
);
