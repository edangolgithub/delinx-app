import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";
function Nav1() {
  return (
    <div>
      {/* <Navbar variant="dark">
        <Container>   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">       
          <Nav className="">
          <Nav.Link href="#home">Vision & Mission</Nav.Link>
            <Nav.Link href="#home">Projects</Nav.Link>
            <Nav.Link href="#features">Equipe</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>       */}

      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto dnav">
              <Nav.Link href="#home">Vision & Mission</Nav.Link>
              <Nav.Link href="#home">Projects</Nav.Link>
              <Nav.Link href="#home">Equipe</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav1;
