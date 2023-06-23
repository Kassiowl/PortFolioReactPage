import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../css/navbar.css";
import Signature from "../../Signature.png";

function NavBar() {
  return (
    <Navbar variant="dark" className="navbar" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand>
          <img src={Signature} alt="logo" width={"150px"} height={"50px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-element" href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className="nav-element" href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link className="nav-element" href="#experiences">My Experiences</Nav.Link>
            <Nav.Link className="nav-element" href="#projects">Highlight Projects</Nav.Link>
            <Nav.Link className="nav-element" href="#contact">Contact me!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
