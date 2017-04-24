import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import reactRoutes from './../routes/routes.js';
//import NavBar from './components/navBar.js';
import SearchBar from './containers/searchBar.js';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));