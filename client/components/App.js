import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchBar from '../containers/searchBar.js';

// http://exprostudio.com/html/article/index.html

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='app-container'> 
          <div>
            <h1><strong>PICK!</strong></h1>
            <p>For Moments When Deciding Where To Eat Becomes A Chore</p>
          </div>
          <SearchBar />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(App);