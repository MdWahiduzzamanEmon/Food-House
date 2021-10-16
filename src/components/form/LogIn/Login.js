import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useHistory, Link } from "react-router-dom";
import googleLogo from '../../../Images/google-logo-9824-32x32.ico'
import twitterLogo from '../../../Images/logo-twitter-png-5860-32x32.ico'
import logo from "../../../Images/logo2.png";
const Login = () => {
  const { googleSign, twitterSign ,setIsLoading} = useAuth();
  const location = useLocation();
  const redirect_url = location.state?.from;
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

    return (
      <div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={logo} className="img-fluid w-25 my-5" alt="" />
          <>
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
            <button className="w-50 mt-3 btn btn-danger">Login</button>
          </>

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