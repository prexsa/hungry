import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../containers/header.js';
import SearchBar from '../containers/searchBar.js';

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
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(App);