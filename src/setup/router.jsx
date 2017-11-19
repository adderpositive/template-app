import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Main from '../components/Main';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/test" component={Main} />
    </Switch>
  </BrowserRouter>
);
