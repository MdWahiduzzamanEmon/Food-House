import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useData from '../../Hooks/useData';


const FoodDetails = () => {
    const { foodId } = useParams();
  const { foods } = useData();
  const {handleToAddToCart}=useAuth();
  const [foodAmount, setFoodAmount] = useState(1);
  // const [plusAmount ,setPlusAmount]=useState();
    const foodItem = foods.find(
      (food) => parseInt(food?.id) === parseInt(foodId)
    );
    // console.log(foodItem);
  
  console.log(foodAmount);
  const plusPrice = () => {
    const newAmount = parseInt(foodAmount) + parseInt(1);
    return setFoodAmount(newAmount);
  }
  // console.log(plusAmount);
  const minusPrice = () => {
    const newAmount = parseInt(foodAmount) - parseInt(1);
    if (newAmount <= 0) {
      return;
    } else {
      setFoodAmount(newAmount);
    }  
  }

  const newFoodPrice = foodItem?.f_price * foodAmount;

  console.log(newFoodPrice);
    return (
      <div className="container my-5 py-5 text-start">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-5 text-center text-md-start">
            <h1 className="py-3">{foodItem?.f_name}</h1>
            <p>{foodItem?.f_text}</p>
            <div className="d-md-flex align-items-center py-4">
              <div className="me-md-3 pe-md-4">
                <h2>${newFoodPrice.toFixed(2)}</h2>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn border mx-2" onClick={minusPrice}>
                  <i className="fas fa-minus"></i>
                </button>
                <h3>{foodAmount}</h3>
                <button className="btn border mx-2" onClick={plusPrice}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <button
              className="btn btn-danger rounded-pill"
              onClick={() => {
                handleToAddToCart(foodItem);
              }}
            >
              {" "}
              <i className="fas fa-shopping-cart pe-3"></i>Add
            </button>
          </div>

          <div className="col-md-7 text-md-end text-center">
            <img src={foodItem?.f_img} className="img-fluid w-75" alt="" />
          </div>
        </div>
        <section className="text-center my-5">
          <Link to="/allFoods">
            <button className="btn btn-danger">All Foods</button>
          </Link>
        </section>
      </div>
    );
};

export default FoodDetails;

//  fetch("./food-fakeData.json");