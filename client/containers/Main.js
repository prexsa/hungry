import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GOOGLE_MAPS_API } from '../../config.js';


class Main extends Component {

  componentDidUpdate() {
    const data = this.props.restaurants[0].businesses;
    const lat = data[0].location.coordinate.latitude;
    const lng = data[0].location.coordinate.longitude;
    
    const coordinates = {lat: lat, lng: lng };

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
    const data = this.props.restaurants;
    const buzz = data[0];
    if(!buzz) {
      return <div>Loading</div>
    }
    const business = buzz.businesses;
console.log("Main.js data: ", business[0]);
    const name = business[0].name;
    const phone = business[0].display_phone;
    const address = business[0].location.display_address;
    
    let addressStr = '';
    address.forEach((content) => {
      addressStr += " " + content;
    });


    const rating = business[0].rating;
    const ratingImg = business[0].rating_img_url;
    const yelp_link = business[0].url;
    const snippet = business[0].snippet_text;

    const mapStyle = {
      width: 580,
      height: 380
    };

		return (
			<div className="main-container">
        <div className="map-container" ref="map" style={mapStyle}>
          Maps
        </div>
        <div className="content-container">
          <ul className="list-group">
            <li>
              <h4><a target='_blank' href={yelp_link}>{name}</a></h4>
              <hr width="50%" />
            </li>
            <li>
              {phone}
              <hr width="10%" />
            </li>
            <li>
              {addressStr}
              <hr width="50%" />
            </li>
            <li>
              <img src={ratingImg} />&nbsp;{rating}
              <hr width="10%" />
            </li>
            <li>
              {snippet}
            </li>
          </ul> 
        </div>
			</div>
		)
	}
}

function mapStateToProps({restaurants}) {
  return { restaurants };
}

export default connect(mapStateToProps)(Main);