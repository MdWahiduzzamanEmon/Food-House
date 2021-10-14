import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from "../../../Images/logo2.png"

const Header = () => {
  const { user ,logOut} = useAuth();
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Link to="/home" className="d-inline">
              <img src={logo} className="img-fluid w-25" alt="logo" />
            </Link>

            <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "200px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/home" className="fw-bold text-dark mx-4">
                  Home
                </Nav.Link>
                {user?.email ? (
                  <button className="fw-bold px-4 btn" onClick={logOut}>
                    Logout
                  </button>
                ) : (
                  <Nav.Link as={Link} to="/login" className="fw-bold text-dark">
                    Login
                  </Nav.Link>
                )}
                {user?.email && (
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={user?.photoURL}
                      className="w-50 rounded-circle"
                      alt=""
                    />
                  </div>
                )}
                <Link to="/signup">
                  <button className="btn btn-danger rounded-pill mx-3 px-4">
                    SignUp
                  </button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;