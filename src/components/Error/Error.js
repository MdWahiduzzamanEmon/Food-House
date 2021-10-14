import React from 'react';
import { Link } from 'react-router-dom';
import error from "../../Images/error.jpg"
const Error = () => {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <img src={error} className="img-fluid w-75" alt="error" />
        <Link to="/home">
          <button className="btn btn-danger mb-5">Back to Home</button>
        </Link>
      </div>
    );
};

export default Error;