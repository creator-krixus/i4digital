import {
  Link
} from "react-router-dom";
import React from 'react'
import './footer.css'
import { Navbar, Nav, Container, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
<Navbar expand="lg" bg="dark" variant="dark" sticky="bottom">
  <Container>
  <Link to="/" className="link">Home</Link>
  <Nav>
      <Nav.Link  href="https://www.linkedin.com/in/wilson-rueda-63273b1ab/">
        Creado por Wilson Rueda
      </Nav.Link>
    </Nav>
  </Container>
</Navbar>
    )
}

export default Footer
