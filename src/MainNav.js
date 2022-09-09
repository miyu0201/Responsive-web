import React from "react";

import { Col, Navbar, Nav } from "react-bootstrap/";
import { Search, Star } from "react-bootstrap-icons";

function MainNav() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3"
    >
      <Navbar.Brand href="#home">
        <Col>
          <Star color="white" size={45} />
        </Col>
      </Navbar.Brand>
      <Col xs={7} md lg={7} xl={8} className="d-flex flex-row-reverse">
        <Search color="white" size={23} />
      </Col>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="#aboutUs">About Us</Nav.Link>
          <Nav.Link href="#product">Product</Nav.Link>
          <Nav.Link href="#contact"> Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MainNav;
