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

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="dashboard" component={Dashboard} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));