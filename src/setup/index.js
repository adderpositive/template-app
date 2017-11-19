import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as FelaProvider } from 'react-fela';
import Router from './router';
import renderer from './renderer';
import store from './store';

export default () => (
  <ReduxProvider store={store}>
    <FelaProvider renderer={renderer}>
      <Router />
    </FelaProvider>
  </ReduxProvider>    
);
