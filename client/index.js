import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import reducers from './reducers/index.js';
import App from './components/App.js';
import Main from './containers/Main.js';
import Dashboard from './containers/Dashboard.js';
import RequireAuth from './containers/auth/RequireAuth.js';
import { AUTH_USER } from './actions/types.js';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
if(token) { store.dispatch({ type: AUTH_USER }); }

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="dashboard" component={RequireAuth(Main)} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));