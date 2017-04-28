import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App.js';
import Dashboard from './containers/Dashboard.js';
import Login from './containers/logIn.js';
import reducers from './reducers/index.js';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)} >
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={Login} />
        <Route path="dashboard" component={Dashboard} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));