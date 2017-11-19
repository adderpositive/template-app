import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { createRenderer } from 'fela';
import { Provider as FelaProvider } from 'react-fela';
import reducer from './reducer';
import initialState from './initialState';

import Main from './Main';

const store = createStore(reducer, initialState); // redux store
const renderer = createRenderer(); // fela renderer
const mountNode = document.getElementById('app');

ReactDOM.render(
  <ReduxProvider store={store}>
    <FelaProvider renderer={renderer}>
      <Main />
    </FelaProvider>
  </ReduxProvider>,
  mountNode
);