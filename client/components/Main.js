import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GOOGLE_MAPS_API } from '../../config.js';


class Main extends Component {

  componentDidUpdate() {
    console.log('refs: ', this.refs.map)

    const coordinates = {lat: 33.8537859, lng: -118.17661799999999 };

    const map = new google.maps.Map(this.refs.map , {
      zoom: 15, 
      center: coordinates
    })

    const marker = new google.maps.Marker({
      position: coordinates,
      map: map
    })
    
  }

  render() {
    console.log("restaurant: ", this.props.restaurants);
    const data = this.props.restaurants;
    const buzz = data[0];
    if(!buzz) {
      return <div>Loading</div>
    }
    const business = buzz.businesses;
console.log("data: ", business[0]);
    const name = business[0].name;
    const phone = business[0].display_phone;
    const address = business[0].location.display_address;
    const rating = business[0].rating;
    const ratingImg = business[0].rating_img_url;
    const yelp_link = business[0].url;
    const snippet = business[0].snippet_text;

    const mapStyle = {
      width: 350,
      height: 200,
      border: '1px solid black'
    };

		return (
			<div className="main-container"> 
        <h4><a target='_blank' href={yelp_link}>{name}</a></h4>
        <h6>{phone}</h6>
        <div className="content-container">
          <img src={ratingImg} />{rating}
          {snippet}
          
        </div>
        <div className="map-container" ref="map" style={mapStyle}>
          Maps
        </div>
			</div>
		)
	}
}

function mapStateToProps({restaurants}) {
  return { restaurants };
}

export default connect(mapStateToProps)(Main);