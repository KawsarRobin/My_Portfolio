import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar
        style={{ backgroundColor: '#010102', color: '#FFA600' }}
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', color: '#FFA600' }}
              navbarScroll
            >
              <Nav.Link style={{ color: '#FFA600' }} as={Link} to="/home">
                <i class="fas fa-home"></i> Home
              </Nav.Link>
              <Nav.Link style={{ color: '#FFA600' }} as={Link} to="/about">
                <i class="fas fa-user"></i> About
              </Nav.Link>
              <Nav.Link style={{ color: '#FFA600' }} as={Link} to="/skill">
                <i class="fas fa-code"></i> Skills
              </Nav.Link>
              <Nav.Link style={{ color: '#FFA600' }} as={Link} to="/projects">
                <i class="far fa-list-alt"></i> Portfolio
              </Nav.Link>
              <Nav.Link style={{ color: '#FFA600' }} as={Link} to="/blog">
                <i class="far fa-newspaper"></i> Blogs
              </Nav.Link>
              <Nav.Link style={{ color: '#FFA600' }} as={Link} to="/contact">
                <i class="far fa-envelope"></i> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
