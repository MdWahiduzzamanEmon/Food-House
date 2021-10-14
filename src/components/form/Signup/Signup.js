import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../Images/logo2.png";
import googleLogo from "../../../Images/google-logo-9824-32x32.ico";
import twitterLogo from "../../../Images/logo-twitter-png-5860-32x32.ico";
import useAuth from '../../../Hooks/useAuth';
const Signup = () => {

    const {  googleSign } = useAuth();
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={logo} className="img-fluid w-25 my-5" alt="" />
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3 w-50"
            >
              <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3 w-50"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="w-50"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <button className="w-50 mt-3 btn btn-danger">Sign up</button>

            <Link
              to="/login"
              className="text-danger fw-bold text-decoration-none py-3"
            >
              Already have an account
            </Link>
          </>
          <div>
            <button className="btn border my-4 me-4 rounded-pill">
              <img src={googleLogo} alt="" onClick={googleSign} />
            </button>
            <button className="btn border my-4 rounded-pill">
              <img src={twitterLogo} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default Signup;