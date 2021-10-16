import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from "../../../Images/logo2.png"
import { HashLink } from "react-router-hash-link";
const Header = () => {
  const { user, logOut, addingFood } = useAuth();
  console.log(addingFood);
    return (
      <div>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <div className=" text-start">
              <Link to="/home">
                <img src={logo} className="img-fluid w-25" alt="logo" />
              </Link>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0 "
                style={{ maxHeight: "240px" }}
                navbarScroll
              >
                <div>
                  {" "}
                  <Nav.Link
                    as={HashLink}
                    to="/home#home"
                    className="fw-bold text-dark"
                  >
                    Home
                  </Nav.Link>
                </div>
                <div>
                  {" "}
                  <Nav.Link
                    as={HashLink}
                    to="/home#blog"
                    className="fw-bold text-dark"
                  >
                    Blog
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link
                    as={Link}
                    to="/cartitem"
                    className="fw-bold text-dark mx-2"
                  >
                    <button type="button" className="btn position-relative">
                      <i className="fas fa-shopping-cart"></i>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">
                        {addingFood.length}
                      </span>
                    </button>
                  </Nav.Link>
                </div>
                <div>
                  {user?.uid ? (
                    <button className="fw-bold px-4 btn" onClick={logOut}>
                      Logout
                    </button>
                  ) : (
                    <Nav.Link
                      as={Link}
                      to="/login"
                      className="fw-bold text-dark"
                    >
                      Login
                    </Nav.Link>
                  )}
                </div>
                {user?.uid && (
                  <div className="d-flex justify-content-center align-items-center">
                    <h5 className="fw-bold border border-3 border-danger rounded p-2 ">
                      {user?.displayName}
                    </h5>
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