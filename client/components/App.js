import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../containers/header.js';
import SearchBar from '../containers/searchBar.js';
import Main from '../containers/Main.js';
// http://exprostudio.com/html/article/index.html


class App extends Component {
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
        </Switch>
      </div>
    )
  }
}

export default App;