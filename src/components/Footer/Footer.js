import React from 'react';
import footerLogo from '../../Images/logo.png'
const Footer = () => {
    return (
      <div className=" bg-black">
        <section className="row container py-4 mt-5 justify-content-between">
          <div className="md-col-6 text-start w-50">
            <img src={footerLogo} alt="" className="img-fluid w-25" />
          </div>
          <div className="col-md-3 text-light text-start">
            <h6>About Online food</h6>
            <h6>Read our blog</h6>
            <h6>Sign up to deliver</h6>
            <h6>Add your restaurant</h6>
          </div>
          <div className="col-md-3 text-light text-start">
            <h6>Get help</h6>
            <h6>Read FAQs</h6>
            <h6>View all cities</h6>
            <h6>Restauents near me</h6>
          </div>
        </section>
        <section className="container  text-light mt-4 py-4">
          <div className="row text-start">
            <div className="col-md-5">Copyright &copy; 2020 Online food</div>
            <div className="d-flex justify-content-evenly col-md-7">
              <h6>Privacy Policy</h6>
              <h6>Terms of Use</h6>
              <h6>Pricing</h6>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Footer;