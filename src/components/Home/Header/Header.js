import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from "../../../Images/logo2.png"

const Header = () => {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Link to="/home" className="d-inline">
              <img src={logo} className="img-fluid w-25" alt="logo" />
            </Link>

            <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto"/>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "200px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/home" className="fw-bold text-dark">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/login" className="fw-bold text-dark">
                  Login
                </Nav.Link>
                <button className="btn btn-danger rounded-pill mx-3 px-4">
                  SIgn up
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;