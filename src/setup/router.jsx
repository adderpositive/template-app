import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Main from '../components/Main';

const router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/test" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default router;
