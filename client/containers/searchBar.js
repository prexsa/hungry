import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurant } from '../actions/index.js';
import { googleapi } from '../../config.js';

// http://geobytes.com/free-ajax-cities-jsonp-api/
// https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentDidMount() {
		// get long and lats of user's locations
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
			<div className="searchbar-container">
				<form onSubmit={this.onFormSubmit} className="input-group">
					<input
						id="city-suggest"
					  placeholder="INPUT AN AREA"
					  className="form-control"
					  value={this.state.term}
					  onChange={this.onInputChange} />
					<span className="input-group-btn">
					  <button type="submit" className="btn btn-secondary search-btn">SEARCH</button>
					</span>
				</form>
			</div>
		)
	}

	onInputChange(e) {
		const input = document.getElementById('city-suggest');
		const googleAutocomplete = new google.maps.places.Autocomplete(input);
		this.setState({ term: e.target.value });
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.props.fetchRestaurant(this.state.term);
		this.setState({ term: '' })
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchRestaurant }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

window.addEventListener('load', () => {
	let script = document.createElement('script');
	script.type = 'text/javascript';
	script.src	= `https://maps.googleapis.com/maps/api/js?key=${googleapi}&libraries=places`;
	document.body.appendChild(script);
});
