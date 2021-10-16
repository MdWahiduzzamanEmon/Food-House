import React, { useState } from 'react';
import { useParams } from 'react-router';
import useData from '../../Hooks/useData';

const FoodDetails = () => {
    const { foodId } = useParams();
    const { foods } = useData();
    const [,setFoodAmount] = useState();
    const foodItem = foods.find((food) => food?.id==foodId);
    // console.log(foodItem);
  
  const foodAmount = (e) => {
    setFoodAmount(e.target.value)
  }
  const plusPrice = () => {
    
  }
  
  
    return (
      <div className="container my-5 py-5 text-start">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5">
            <h1>{foodItem?.f_name}</h1>
            <p>{foodItem?.f_text}</p>
            <div className="d-flex align-items-center">
              <div className="me-3">
                <h2>${foodItem?.f_price}</h2>
              </div>
              <div>
                <button className="btn border mx-2">
                  <i className="fas fa-minus"></i>
                </button>
                <input type="number" name="" className="priceNumber" value="1" onBlur={foodAmount}/>
                <button className="btn border mx-2" onClick={ plusPrice}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <button className="btn btn-danger rounded-pill">
              {" "}
              <i className="fas fa-shopping-cart pe-3"></i>Add
            </button>
          </div>
          <div className="col-md-7 text-end">
            <img src={foodItem?.f_img} className="img-fluid w-75" alt="" />
          </div>
        </div>
      </div>
    );
};

export default FoodDetails;

//  fetch("./food-fakeData.json");