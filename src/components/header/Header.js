import {
  Link
} from "react-router-dom";
import React from 'react'
import './header.css'
import { Navbar, Nav, Container, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (    
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header" sticky="top">
        <Container>
          <Link to="/" className="link">Home</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link to="/Usuarios" className="link">Usuarios</Link>
                <Link to="/Albumes" className="link">Albumes</Link>  
                <Link to="/Publicaciones" className="link">Publicaciones</Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
