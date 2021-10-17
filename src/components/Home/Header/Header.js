import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from "../../../Images/logo2.png"
import { HashLink } from "react-router-hash-link";
import { useAddToCart } from '../../../Context/AddtoCart';
const Header = () => {
  const { user, logOut  } = useAuth();
  const { addingFood } = useAddToCart();
  // console.log(addingFood);
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
                    className="fw-bold text-dark"
                  >
                    <p type="button" className="btn position-relative">
                      <i className="fas fa-shopping-cart"></i>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">
                        {addingFood.length}
                      </span>
                    </p>
                  </Nav.Link>
                </div>
                <div>
                  {user?.uid ? (
                    <button
                      className="fw-bold btn-handle btn"
                      onClick={logOut}
                    >
                      <i className="fas fa-sign-out-alt font"></i>
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
                  <div className="d-flex">
                    <h5 className="fw-bold rounded p-2 ">
                      {user?.displayName} <img src={ user?.photoURL} alt="" className="img-fluid profile_img"/>
                    </h5>
                  </div>
                )}
                {!user?.uid && <Link to="/signup">
                  <button className="btn btn-danger rounded-pill mx-3 px-4">
                    SignUp
                  </button>
                </Link>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;