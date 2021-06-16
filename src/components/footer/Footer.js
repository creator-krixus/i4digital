import {
  Link
} from "react-router-dom";
import React from 'react'
import './footer.css'
import { Navbar, Nav, Container, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
<Navbar expand="lg" bg="dark" variant="dark">
  <Container>
  <Link to="/" className="link">Home</Link>
  
  <Nav>
      <Nav.Link  href="http://sitio.i4digital.com.co/">
        Creado por i4digital
      </Nav.Link>
    </Nav>
  </Container>
</Navbar>
    )
}

export default Footer
