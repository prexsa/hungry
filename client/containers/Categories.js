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
              <img src="https://eat24-files-live.s3.amazonaws.com/cuisines/v4/american.jpg?Signature=iUbccRrihzCrGD3LrxzeZocFgbU%3D&Expires=1493254759&AWSAccessKeyId=AKIAIEJ2GCCJRT63TBYA" />
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