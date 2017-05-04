import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../containers/header.js';
import SearchBar from '../containers/searchBar.js';
import Main from '../containers/Main.js';
import Dashboard from '../containers/Dashboard.js';


// http://exprostudio.com/html/article/index.html

class App extends Component {
  componentWillReceiveProps() {
    console.log('auth: ', this.props.authenticated)
  }

  render() {
    return (
      <div className='app-container'> 
        <Header />
        <div>
          <h1><strong>PICK!</strong></h1>
          <p>For Moments When Deciding Where To Eat Becomes A Chore</p>
        </div>
        <SearchBar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(App);