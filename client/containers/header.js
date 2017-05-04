import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { Nav, Navbar, MenuItem, NavDropdown} from 'react-bootstrap';

import Login from '../containers/login.js';
import Register from '../containers/register.js';

class Header extends Component {
  goLogout() {
    console.log('calling goLogout: ');
    this.props.logout();
  }

  renderLinks() {
    if(this.props.auth.authenticated) {
      return (
        <li key={3}>
          <a href="#" onClick={() => this.goLogout()}>logout</a>
        </li>
      )
    }else{
      return [
        <li key={1} className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">login</a>
          <div className="dropdown-menu">
            <Login />
          </div>
        </li>,
        <li key={2} className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">register</a>
          <div className="dropdown-menu">
            <Register />
          </div>
        </li>
      ]
    }
  }
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className="nav navbar-nav navbar-right">
          {this.renderLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Header);