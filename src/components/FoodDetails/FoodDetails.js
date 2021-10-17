import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAddToCart } from '../../Context/AddtoCart';
import useData from '../../Hooks/useData';
import FoodPriceAndDetails from './FoodPriceAndDetails';


const FoodDetails = () => {
    const { foodId } = useParams();
  const { foods } = useData();
  const {handleToAddToCart}=useAddToCart();
  const [foodAmount, setFoodAmount] = useState(1);
  // const [plusAmount ,setPlusAmount]=useState();
    const foodItem = foods.find(
      (food) => parseInt(food?.id) === parseInt(foodId)
    );
    // console.log(foodItem);
  let newfoodAmount = foodItem?.f_price * foodAmount;
  
  // console.log(foodItem.f_price);
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

  

  console.log(newfoodAmount);
    return (
      <div className="container my-5 py-5 text-start">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-5 text-center text-md-start">
            <FoodPriceAndDetails
              plusPrice={plusPrice}
              minusPrice={minusPrice}
              newfoodAmount={newfoodAmount}
              foodItem={foodItem}
              foodAmount={foodAmount}
            ></FoodPriceAndDetails>
            <button
              className="btn btn-danger rounded-pill"
              onClick={() => {
                handleToAddToCart(foodItem);
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