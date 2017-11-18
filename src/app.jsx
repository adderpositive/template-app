import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer'
import initialState from './initialState'

import Main from './Main';

const store = createStore(reducer, initialState);

const mountNode = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  mountNode
);