import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import bannerimg from "../../../Images/bannerbackground.png";

import logo from "../../../Images/logo2.png";
import googleLogo from "../../../Images/google-logo-9824-32x32.ico";
import twitterLogo from "../../../Images/logo-twitter-png-5860-32x32.ico";
import useAuth from '../../../Hooks/useAuth';
const Signup = () => {

  const {
    googleSign,
    twitterSign,
    handleToGetEmail,
    handleRegForm,
    handleToGetPassword,
    handleToGetName,
    handleToGetPhoto,
  } = useAuth();

    return (
      <div
        style={{ backgroundImage: `url(${bannerimg})` }}
        className="banner-bg"
      >
        <div className="d-flex justify-content-center align-items-center flex-column mt-5 pt-4">
          <img src={logo} className="img-fluid w-25 my-5" alt="" />
          <Form className="w-75" onSubmit={handleRegForm}>
            <FloatingLabel label="Name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                onBlur={handleToGetName}
              />
            </FloatingLabel>
            <FloatingLabel
              label="Input your profile Photo link"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Input your profile Photo link"
                onBlur={handleToGetPhoto}
              />
            </FloatingLabel>
            <FloatingLabel label="Email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onBlur={handleToGetEmail}
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onBlur={handleToGetPassword}
              />
            </FloatingLabel>
            <button className="w-100 py-3 mt-3 btn btn-danger">Sign up</button>
          </Form>
          <Link
            to="/login"
            className="text-danger fw-bold text-decoration-none py-3"
          >
            Already have an account
          </Link>
          <div>
            <button className="btn border my-4 me-4 rounded-pill">
              <img src={googleLogo} alt="" onClick={googleSign} />
            </button>
            <button className="btn border my-4 rounded-pill">
              <img src={twitterLogo} onClick={twitterSign} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default Signup;