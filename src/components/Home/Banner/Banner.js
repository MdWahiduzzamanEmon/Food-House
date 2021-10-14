import React, { useState, useEffect } from "react";
import './Banner.css'
import bannerimg from '../../../Images/bannerbackground.png'
import Food from "./Food";
import { Row } from "react-bootstrap";
const Banner = () => {
    const [foods, setFoods] = useState([]);
    const [searchFood, setSearchFood] = useState([]);

    useEffect(() => {
        fetch('./food-fakeData.json')
          .then((res) => res.json())
            .then((data) => {
                setFoods(data);
                setSearchFood(data);
          });
    }, [])
    
    const handleToShowFood = (e) => {
        const searchText = e.target.value;
        const value = foods.filter(food => food.f_name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchFood(value);
    }
    console.log(searchFood);

  const handleBrkfst = (e) => {
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
  }
  
  const handleDinner = (e) => {
      const buttonInnerText = e.target.parentNode.childNodes[2].innerText;
      const value = foods.filter((food) =>
        food.f_menu_time.toLowerCase().includes(buttonInnerText.toLowerCase())
      );
      setSearchFood(value);
  }
  
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
                    onChange={handleToShowFood}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="container text-center my-4 py-4">
          <div>
            <button className="btn fw-bold mx-3" onClick={handleBrkfst}>Breakfast</button>
            <button className="btn fw-bold mx-3" onClick={ handleLunch}>Lunch</button>
            <button className="btn fw-bold mx-3" onClick={
              handleDinner
            }>Dinner</button>
          </div>

          <Row xs={1} md={2} lg={3} className="g-4 mt-4">
            {searchFood?.slice(0,6).map((food) => (
              <Food key={food.id} food={food}></Food>
            ))}
          </Row>
        </section>
      </>
    );
};

export default Banner;