import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavbarComponent.css';

function NavbarComponent() {
  return (
    <Navbar>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Resume</Nav.Link>
        <Nav.Link href="https://github.com/mrcoulter45?tab=repositories">Projects</Nav.Link>
        <Nav.Link href="https://github.com/mrcoulter45">Github</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/michael-coulter-164868153">LinkedIn</Nav.Link>
        <Nav.Link href="https://www.facebook.com/michael.coulter.7547">Facebook</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
