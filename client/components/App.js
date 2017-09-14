import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// http://exprostudio.com/html/article/index.html

class App extends Component {
  constructor(props) {
    super(props);

    // get long and lats of user's locations
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showCurrentPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

    function showCurrentPosition(position) {
      console.log('position: ', position.coords);
      if(!position) {
        this.setState({ coords: position.coords });
      }
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className='app-container'> 
          <h1><strong>PAP!</strong></h1>
          <h5>(Pick A Place!)</h5>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(App);