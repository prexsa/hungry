import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hours extends Component {
  render() {
    const { hours } = this.props;
    console.log('hours: ', hours)

    return (
      <div>
        Hello World, I'm Hours of Operations
      </div>
    )
  }
}

function mapStateToProps({ hours }) {
  return { hours }
}

export default connect(mapStateToProps)(Hours);