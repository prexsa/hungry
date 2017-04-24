import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from '../client/components/App.js';
import Home from '../client/components/Home.js';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;