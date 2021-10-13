import React, { useState, useEffect } from "react";
import './Banner.css'
import bannerimg from '../../../Images/bannerbackground.png'
const Banner = () => {
    const [foods, setFoods] = useState();

    useEffect(() => {
        fetch('./food-fakeData.json')
          .then((res) => res.json())
          .then((data) => console.log(data));
    },[])
    return (
      <>
        <div
          className="banner-bg"
          style={{ backgroundImage: `url(${bannerimg})` }}
        >
          <div className="conatiner">
            <div className="banner-text text-center">
              <div>
                <h1>Best food waiting for you</h1>
                <div className="input-group mb-3 mt-4">
                  <input
                    type="text"
                    className="form-control p-3 rounded-pill position-relative text-center"
                    placeholder="Search food items"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                </div>
              </div>
            </div>
          </div>
            </div>
            
            <section>

            </section>
      </>
    );
};

export default Banner;