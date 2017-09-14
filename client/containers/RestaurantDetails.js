import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBusinessHours, fetchBusinessReviews, fetchScrape } from '../actions/index.js'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import {indigo500} from 'material-ui/styles/colors';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationLocation from 'material-ui/svg-icons/communication/location-on';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';

import SearchBar from '../containers/searchBar.js';
import Hours from '../containers/Hours.js';
import Reviews from '../containers/Reviews.js';

const mapStyle = {
  width: 580,
  height: 580
};

class RestaurantDetails extends Component {
  componentDidMount() {
    if(this.props.restaurants.length <= 0) {
      return <div>Testing map</div>;
    }
    const data = this.props.restaurants[0].businesses;
    const lat = data[0].coordinates.latitude;
    const lng = data[0].coordinates.longitude;
    
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
    const { restaurants } = this.props;
    if(!restaurants[0]) {
      return <div>Testing</div>;
    }
    console.log('business: ', restaurants[0].businesses);
    const businesses = restaurants[0].businesses;
    const selected = businesses[0];
    const category1 = selected.categories[0][0];
    let category = "";
    selected.categories.forEach(type => {
      category += " " + type.title;
    });
    const name = selected.name;
    const address = selected.location.display_address[0] + " " + selected.location.display_address[1];
    const phone = selected.phone;
    const ratingNum = selected.rating;
    const yelpRatingImg = selected.rating_img_url;
    const reviewCount = selected.review_count;
    const yelpUrl = selected.url;
    const businessId = selected.id;

    this.props.fetchBusinessHours(businessId);
    this.props.fetchBusinessReviews(businessId);
    //this.props.fetchScrape(yelpUrl);

    return (
      <div>
        <SearchBar />
        <Card className="detail-container">
          <div className="restaurant-detail">
            <a href={yelpUrl} target="_blank">
              <CardHeader 
                title={name} 
                subtitle={category}
                style={{'left': 20}} 
                titleStyle={{'fontSize': 24, 'textAlign': 'left', 'paddingRight': 0}}
                subtitleStyle ={{'left': -83, 'position': 'relative' }}
              />
            </a>
            <CardText>
              <List  className="details">
                <ListItem 
                  primaryText={phone} 
                  leftIcon={<CommunicationCall color={indigo500} />} 
                  disabled={true}
                />
                <ListItem 
                  primaryText={address} 
                  leftIcon={<CommunicationLocation color="#f75c54" />}
                  disabled={true} 
                />
                <ListItem  hoverColor='#fff' style={{'marginLeft': 55}}>
                  <img src={yelpRatingImg} alt="Yelp Rating Image" /> &nbsp; {ratingNum} Star Rating
                </ListItem>
                <ListItem 
                  primaryText={reviewCount + " Reviews"} 
                  disabled={true}
                  style={{'marginLeft': 55}} 
                />
                <ListItem 
                  primaryText={<Hours />}
                  leftIcon={<ActionSchedule color="#f75c54" />}
                  disabled={true}
                />
              </List>
            </CardText>
          </div>
          <div className="map-container" ref="map" style={mapStyle}>
            Maps
          </div>
          <div className="clear"></div>
        </Card>
        <Reviews />
      </div>
    )

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBusinessReviews, fetchBusinessHours, fetchScrape }, dispatch);
}

function mapStateToProps({ restaurants }) {
  return { restaurants }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetails);