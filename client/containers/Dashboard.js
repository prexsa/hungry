import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return(
      <div className="main-container">
        <div className="dashboard-header">
          <h3>Dashboard</h3>
          <p>Establishments visit</p>
          <div>
            <h6>Name of Restaurant</h6>
            <ul>
              <li>Address</li>
              <li>Phone</li>
              <li>Visited count:</li>
              <li></li>
            </ul>
          </div>
          <div>
            Have user set favorite area, and list highest rated restaurant.
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;