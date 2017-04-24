import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
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


		return (
			<div className="main-container"> 
        <h4>{name}</h4>
        <div className="main-content">
          
        </div>
			</div>
		)
	}
}

function mapStateToProps({restaurants}) {
  return { restaurants };
}

export default connect(mapStateToProps)(Main);