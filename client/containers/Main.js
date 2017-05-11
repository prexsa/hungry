import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleapi } from '../../config.js';

import Area from '../containers/ExploreArea.js';


class Main extends Component {

  componentDidUpdate() {
    if(this.props.restaurants.length <= 0) {
      return <Area />;
    }
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
    let buzz = data[0];
    if(!buzz) {
      return <Area />
    }
    let business = buzz.businesses;
    business = business[Math.floor(Math.random() * business.length)];
    const name = business.name;
    const phone = business.display_phone.substr(1);
    const address = business.location.display_address;
    
    let addressStr = '';
    address.forEach((content) => {
      addressStr += " " + content;
    });

    const rating = business.rating;
    const review_count = business.review_count;
    const ratingImg = business.rating_img_url;
    const yelp_link = business.url;
    const snippet = business.snippet_text;

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
              <hr width="30%" />
            </li>
            <li>
              {addressStr}
              <hr width="50%" />
            </li>
            <li>
              <img src={ratingImg} />&nbsp;{rating}star rating, {review_count} reviews
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
