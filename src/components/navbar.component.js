import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Link to="/">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" style={{ textDecoration: "none",color: 'rgba(255,255,255,0.6)' }}>
                Home
              </Link>
            </Nav.Link>
           

            <Nav.Link>
              <Link to="/create" style={{ textDecoration: "none",color: 'rgba(255,255,255,0.6)' }}>
                Create Exercise
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/users" style={{ textDecoration: "none",color: 'rgba(255,255,255,0.6)' }}>
                Create User
              </Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
