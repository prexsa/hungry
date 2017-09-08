import React, { Component } from 'react';

import SearchBar from '../containers/searchBar.js';

class Main extends Component {
  render() {
		return (
			<div className="bg">
        <div className="app-search-container">
          <p>For Moments When Deciding Where To Eat Becomes A Chore</p>
          <SearchBar />
        </div>
      </div>
		)
	}
}

export default Main;
