import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// pages
import Main from '../components/Main';

const router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/test" component={Main} />
    </Switch>
  </HashRouter>
);

export default router;
