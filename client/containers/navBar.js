import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {
  authButton() {
    if(this.props.authenticated) {
      return <button onClick={() => this.props.authenticate(false)}>Sign Out</button>;
    }

    return <button onClick={() => this.props.authenticate(true)}>Sign In</button>;
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <a className="navbar-brand" href="#">Hungry!!!</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;