import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentDidMount() {
		// get lon and lats of user's locations
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showCurrentPosition);
	    } else { 
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }

	    function showCurrentPosition(position) {
	    	console.log('position: ', position)
	    }
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
				  placeholder="Find a restaurant in your area"
				  className="form-control"
				  value={this.state.term}
				  onChange={this.onInputChange} />
				<span className="input-group-btn">
				  <button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		)
	}

	onInputChange(e) {
		this.setState({ term: e.target.value });
	}

	onFormSubmit(e) {
		e.preventDefault();

		// call the action creator
		axios.post('/search', {term: 95051}).then((resp) => {
			console.log('SearchBar resp: ', resp);
		})
		this.setState({ term: '' })
	}
}

export default SearchBar;