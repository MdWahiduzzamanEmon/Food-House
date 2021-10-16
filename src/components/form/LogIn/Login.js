import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useHistory, Link } from "react-router-dom";
import googleLogo from '../../../Images/google-logo-9824-32x32.ico'
import twitterLogo from '../../../Images/logo-twitter-png-5860-32x32.ico'
import logo from "../../../Images/logo2.png";
const Login = () => {
  const {
    googleSign,
    twitterSign,
    setIsLoading,
    handleToGetPassword,
    handleToGetEmail,
    loginUser,
    resetPassword,
  } = useAuth();
  const location = useLocation();
  const redirect_url = location.state?.from|| "/home";
  const history = useHistory();
  const redirectToGoogle = () => {
    googleSign()
      .then((result) => {
       history.push(redirect_url)
      })
      .catch((error) => {
        // setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }
  const redirectToTwitter = () => {
    twitterSign()
      .then((result) => {
         history.push(redirect_url);
      })
      .catch((error) => {
        
      }).finally(() => {
        setIsLoading(false);
      })
  }
  const redirect_signIn = () => {
    loginUser()
      .then((result) => {
        // Signed in
        history.push(redirect_url);
        alert("log in success");
        // ...
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

    return (
      <div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={logo} className="img-fluid w-25 my-5" alt="" />
          <div className="w-75">
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onBlur={handleToGetEmail}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className=""
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onBlur={handleToGetPassword}
              />
            </FloatingLabel>
            <div>
              <button
                className="w-25 m-3 btn btn-danger"
                onClick={redirect_signIn}
              >
                Login
              </button>
              <button
                className="w-50 m-3 btn btn-outline-danger"
                onClick={resetPassword}
              >
                Forget Password
              </button>
            </div>
          </div>

          <Link
            to="/signup"
            className="text-danger fw-bold text-decoration-none py-3"
          >
            --Register--
          </Link>
          <div>
            <button className="btn border mt-5 me-4 rounded-pill">
              <img src={googleLogo} alt="" onClick={redirectToGoogle} />
            </button>
            <button className="btn border mt-5 rounded-pill">
              <img src={twitterLogo} onClick={redirectToTwitter} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;