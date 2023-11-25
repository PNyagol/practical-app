import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="py-3">
      <Container>
        <Navbar.Brand href="#home" style={{ color: '#fff', fontSize: '1.5rem' }}>Fitness Tracker</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
            
          <Nav className="ms-auto me-5" style={{ fontSize: '1.2rem' }}>

            <Nav.Link href="#home" style={{ color: '#fff' }}>Home | Workout Items</Nav.Link>

            {/* I am thinking that we should display our cards in the above section */}

            <Nav.Link href="#form" style={{ color: '#fff' }}>Form</Nav.Link>

            <Nav.Link href="#statistics" style={{ color: '#fff' }}>Statistics</Nav.Link>

            <Nav.Link href="#contact-us" style={{ color: '#fff' }}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

