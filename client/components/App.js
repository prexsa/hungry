import React, { Component } from 'react';

import NavBar from '../containers/navBar.js';
import SearchBar from '../containers/searchBar.js';
import Main from '../containers/Main.js';

class App extends Component {
  render() {
    return (
      <div className='app-container'> 
        <NavBar />
        {this.props.children}
        <SearchBar />
        <Main />
      </div>
    )
  }
}

export default App;