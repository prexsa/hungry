import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return(
      <div className="main-container">
          <h3>Dashboard</h3>
        <div className="dashboard-header">
          <h3><strong>TOP FAVORITES</strong></h3>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption favorites-captions">
                  <ul>
                    <li><h4>Name of Restaurant</h4></li>
                    <li>Star Rating, Reviews</li>
                    <li>Dollar amount, Category</li>
                    <li>Address</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h3>Thumbnail label</h3>
                  <p>...</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            Have user set favorite area, and list highest rated restaurant.
          </div>
          <div>
            <h3><strong>HIGHEST REVIEWS IN THE AREA</strong></h3>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;