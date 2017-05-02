import React, { Component } from 'react';
import { Nav, Navbar, MenuItem, NavDropdown} from 'react-bootstrap';

import Login from '../containers/login.js';
import Register from '../containers/register.js';

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={1} title="login" id="basic-nav-dropdown" noCaret>
              <Login />
            </NavDropdown>
            <NavDropdown eventKey={2} title="register" id="basic-nav-dropdown" noCaret>
              <Register />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;