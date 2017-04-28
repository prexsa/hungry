import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Login from '../containers/logIn.js'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <nav className="navbar navbar-fixed float-right">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/login">Log In</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <h1>PICK!</h1>
      </div>
    );
  }
}

export default Header;