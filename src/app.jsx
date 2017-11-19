import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { createRenderer } from 'fela';
import { Provider as FelaProvider } from 'react-fela';
import reducer from './reducer';
import initialState from './initialState';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './Main';

const store = createStore(reducer, initialState); // redux store
const renderer = createRenderer(); // fela renderer
const mountNode = document.getElementById('app');

ReactDOM.render(
  <ReduxProvider store={store}>
    <FelaProvider renderer={renderer}>
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/test" component={Main} />
        </div>
      </Router>
    </FelaProvider>
  </ReduxProvider>,
  mountNode
);