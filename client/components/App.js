import React, { Component } from 'react';

import SearchBar from '../containers/searchBar.js';
import Main from './Main.js';

class App extends Component {
  render() {
    return (
      <div className='app-container'> 
        <h1>Hungary!!!</h1>
        <SearchBar />
        <Main />
      </div>
    )
  }
}

export default App;