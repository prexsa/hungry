import React, { Component } from 'react';

import Header from '../containers/header.js';
import SearchBar from '../containers/searchBar.js';
import Main from '../containers/Main.js';

class App extends Component {
  render() {
    return (
      <div className='app-container'> 
        <Header />
        <SearchBar />
        {this.props.children}
        <Main />
      </div>
    )
  }
}

export default App;