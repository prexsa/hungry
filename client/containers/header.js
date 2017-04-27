import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Login from '../containers/logIn.js'

class Header extends Component {
  authButton() {
    if(this.props.authenticated) {
      return <button onClick={() => this.props.authenticate(false)}>Sign Out</button>;
    }

    return <button onClick={() => this.props.authenticate(true)}>Sign In</button>;
  }

  render() {
    return (
      <div className="header-container">
        <nav className="navbar navbar-fixed float-right">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/">Log In</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <h1>PICK!</h1>
      </div>
    );
  }
}

export default Header;