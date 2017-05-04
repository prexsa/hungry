import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from '../containers/header.js';
import SearchBar from '../containers/searchBar.js';
import Main from '../containers/Main.js';
import Dashboard from '../containers/Dashboard.js';


// http://exprostudio.com/html/article/index.html

class App extends Component {
  componentDidUpdate() {
    console.log('auth componentDidUpdate: ', this.props)
  }

  render() {
   console.log('auth render: ', this.props.auth.authenticated) 
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(App);