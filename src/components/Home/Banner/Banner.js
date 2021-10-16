import React, { useEffect } from "react";
import './Banner.css'
import bannerimg from '../../../Images/bannerbackground.png'
import Food from "./Food";
import { Row } from "react-bootstrap";
import useData from "../../../Hooks/useData";
import { Link } from "react-router-dom";


import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const { foods, setSearchFood, searchFood } = useData();
 

   
  useEffect(() => {
    AOS.init({duration:2000});
  }, [])
  

    const handleToShowFood = (e) => {
        const searchText = e.target.value;
        const value = foods.filter(food => food.f_name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchFood(value);
    }


  
// another type  
  /* const handleBrkfst = (e) => {
    const buttonInnerText = e.target.parentNode.childNodes[0].innerText;
    const value = foods.filter((food) =>
      food.f_menu_time.toLowerCase().includes(buttonInnerText.toLowerCase())
    );
    setSearchFood(value);
  }

  const handleLunch = (e) => {
    const buttonInnerText = e.target.parentNode.childNodes[1].innerText;
    const value = foods.filter((food) =>
      food.f_menu_time.toLowerCase().includes(buttonInnerText.toLowerCase())
    );
    setSearchFood(value);
  } */

 /*  const handleDinner = (e) => {
      const buttonInnerText = e.target.parentNode.childNodes[2].innerText;
      const value = foods.filter((food) =>
        food.f_menu_time.toLowerCase().includes(buttonInnerText.toLowerCase())
      );
      setSearchFood(value);
  } */

  const handleToCetagory = (cetagory) => {
    const value = foods.filter(food => food.f_menu_time.toLowerCase().includes(cetagory.toLowerCase()))
    setSearchFood(value)
  }
  // console.log(searchFood);
  
    return (
      <div className="mt-5 pt-3" id="home">
        <div
          className="banner-bg "
          style={{ backgroundImage: `url(${bannerimg})` }}
        >
          <div className="conatiner">
            <div className="banner-text text-center">
              <div>
                <h1>Best food waiting for you</h1>
                <div data-aos="fade-up" className="input-group mb-3 mt-4">
                  <input
                    type="text"
                    className="form-control p-3 rounded-pill position-relative text-center"
                    placeholder="Search food items"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    onChange={handleToShowFood}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="container text-center my-4 py-4">
          <div>
            <button
              className="btn fw-bold mx-3 active"
              onClick={() => handleToCetagory("Breakfast")}
            >
              Breakfast
            </button>

            <button
              className="btn fw-bold mx-3 active"
              onClick={() => handleToCetagory("lunch")}
            >
              Lunch
            </button>
            <button
              className="btn fw-bold mx-3 active"
              onClick={() => handleToCetagory("dinner")}
            >
              Dinner
            </button>
          </div>
          <Row xs={1} md={2} lg={3} className="g-4 mt-4">
            {searchFood?.slice(0, 6).map((food) => (
              <Food key={food.id} food={food}></Food>
            ))}
          </Row>

          <div>
            <Link to="/allFoods">
              <button className="btn btn-danger rounded-pill mt-5">
                {" "}
                All Foods
              </button>
            </Link>
          </div>
        </section>
      </div>
    );
};

export default Banner;