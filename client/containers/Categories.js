import React, { Component } from 'react';

class Categories extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <div className="category-container">
              <h6>Asian</h6>
              <hr width="50%" />
              <img src="http://static01.mediaite.com/med/wp-content/uploads/2014/02/shutterstock_75851407.jpg" />
            </div>
          </div>
          <div className="col-xs-6 col-md-3">
            <div className="category-container">
              <h6>Mexican</h6>
              <hr width="50%" />
              <img src="http://senorgrandes.com/usite/136/images/mexican-food.jpg" />
            </div>
          </div>
          <div className="col-xs-6 col-md-3">
            <div className="category-container">
              <h6>American</h6>
              <hr width="50%" />
              <img src="http://i.ndtvimg.com/i/2016-03/american-food_625x350_61458982932.jpg" />
            </div>
          </div>
          <div className="col-xs-6 col-md-3">
            <div className="category-container">
              Too hungry to even select a broad category as this
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Categories;