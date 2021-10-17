import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAddToCart } from '../../Context/AddtoCart';
import useData from '../../Hooks/useData';
import FoodPriceAndDetails from './FoodPriceAndDetails';


const FoodDetails = () => {
  const { foodId } = useParams();
  const { foods } = useData();
  const { handleToAddToCart } = useAddToCart();
  const [foodQuantity, setFoodQuantity] = useState(1);
  const history = useHistory();
  const foodItem = foods.find(
    (food) => parseInt(food?.id) === parseInt(foodId)
  );

  console.log(foodItem);
  console.log(foodQuantity);

 

  if (foodItem) {
    foodItem.quantity = foodQuantity;
    // foodItem["f_price"] = foodItem?.quantity * foodItem?.f_price;
  }
 
  const newfoodAmount = foodItem?.quantity * foodItem?.f_price;
  
  const plusPrice = () => {
    const newQuantity = parseInt(foodItem.quantity) + parseInt(1);
    
    foodItem.quantity = newQuantity;
    
    return setFoodQuantity(newQuantity);
  };

  
  const minusPrice = () => {
    
    // foodItem.f_price = newAmount;
    if (foodItem.quantity <= 1) {
      return;
    } else {
      const newQuantity = parseInt(foodItem.quantity) - parseInt(1);
      foodItem.quantity = newQuantity;
      setFoodQuantity(newQuantity);
    }
     
  };

  // console.log(newfoodAmount);
  return (
    <div className="container my-5 py-5 text-start">
      <div className="row align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-5 text-center text-md-start">
          <FoodPriceAndDetails
            plusPrice={plusPrice}
            minusPrice={minusPrice}
            newfoodAmount={newfoodAmount}
            foodItem={foodItem}
            // foodAmount={quantity}
          ></FoodPriceAndDetails>
          <button
            className="btn btn-danger rounded-pill"
            onClick={() => {
              // foodItem["quantity"] = foodQuantity;
              foodItem["f_price"] = newfoodAmount;
              handleToAddToCart(foodItem);
              history.push("/cartitem");
            }}
          >
            {" "}
            <i className="fas fa-shopping-cart p-2"></i>Add to cart
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