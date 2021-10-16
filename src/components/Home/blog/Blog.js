import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../../../Images/Image/adult-blur-blurred-background-687824.png'
import photo2 from '../../../Images/Image/chef-cook-food-33614.png'
import photo3 from '../../../Images/Image/architecture-building-city-2047397.png'
const Blog = () => {
    return (
      <div data-aos="fade-up">
        <div className="container text-start py-5" id="blog">
          <div>
            <h2>Why you choose us?</h2>
            <p className="text-secondary">
              Barton waited twenty always repair in within in we do.An delighted
              offending curiosity my is dashwoods at.Boy prosperous increasing
              sorruounded
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 mt-3">
              <div>
                <div>
                  <img src={photo1} alt="" className="img-fluid" />
                </div>
                <div className="d-flex align-items-center  mt-5">
                  <i className="fas fa-truck me-3 text-danger"></i>

                  <div>
                    <h4>Fast Delevery</h4>
                    <p className="text-secondary">
                      Keep your system is sync with automated web hook bases
                      notifications each time link is paid and how we dream
                      about our future.
                    </p>
                  </div>
                </div>
                <Link
                  to="/ihfsuihf"
                  className="text-decoration-none fw-bold ms-4"
                >
                  See more{" "}
                </Link>
                <i className="fas fa-arrow-alt-circle-right text-primary"></i>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div>
                <div>
                  <img src={photo2} alt="" className="img-fluid" />
                </div>
                <div className="d-flex align-items-center  mt-5">
                  <i className="fas fa-truck me-3 text-danger"></i>

                  <div>
                    <h4>A good auto responder</h4>
                    <p className="text-secondary">
                      Keep your system is sync with automated web hook bases
                      notifications each time link is paid and how we dream
                      about our future.
                    </p>
                  </div>
                </div>
                <Link
                  to="/ihfsuihf"
                  className="text-decoration-none fw-bold ms-4"
                >
                  See more{" "}
                </Link>
                <i className="fas fa-arrow-alt-circle-right text-primary"></i>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div>
                <div>
                  <img src={photo3} alt="" className="img-fluid" />
                </div>
                <div className="d-flex align-items-center  mt-5">
                  <i className="fas fa-truck me-3 text-danger"></i>

                  <div>
                    <h4>Home Delevery</h4>
                    <p className="text-secondary">
                      Keep your system is sync with automated web hook bases
                      notifications each time link is paid and how we dream
                      about our future.
                    </p>
                  </div>
                </div>
                <Link
                  to="/ihfsuihf"
                  className="text-decoration-none fw-bold ms-4"
                >
                  See more{" "}
                </Link>
                <i className="fas fa-arrow-alt-circle-right text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;