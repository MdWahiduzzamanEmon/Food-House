import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Food from '../Home/Banner/Food';

const AllFoods = () => {
    const { foods, setSearchFood, searchFood } = useData();

      const handleToShowFood = (e) => {
        const searchText = e.target.value;
        const value = foods.filter((food) =>
          food.f_name.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchFood(value);
    };
     const handleToCetagory = (cetagory) => {
       const value = foods.filter((food) =>
         food.f_menu_time.toLowerCase().includes(cetagory.toLowerCase())
         );
          setSearchFood(value);

  };
  const actives = searchFood.find((food) => food.f_menu_time);
    return (
      <div className="text-center container">
        <div className="input-group mb-3 mt-4">
          <input
            type="text"
            className="form-control p-3 rounded-pill position-relative "
            placeholder="Search food items"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={handleToShowFood}
          />
        </div>
        <div className="d-flex justify-content-evenly button">
          <p
            className={
              actives?.f_menu_time === "breakfast"
                ? "active fw-bold text-decoration-underline"
                : " fw-bold"
            }
            onClick={() => handleToCetagory("Breakfast")}
          >
            Breakfast
          </p>

          <p
            className={
              actives?.f_menu_time === "lunch"
                ? " active fw-bold text-decoration-underline"
                : " fw-bold"
            }
            onClick={() => handleToCetagory("lunch")}
          >
            Lunch
          </p>
          <p
            className={
              actives?.f_menu_time === "dinner"
                ? "active fw-bold text-decoration-underline"
                : " fw-bold"
            }
            onClick={() => handleToCetagory("dinner")}
          >
            Dinner
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
          {searchFood?.map((food) => (
            <Food key={food.id} food={food}></Food>
          ))}
        </Row>
      </div>
    );
};

export default AllFoods;