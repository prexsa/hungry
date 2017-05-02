import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App.js';
import reducers from './reducers/index.js';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)} >
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('app'));