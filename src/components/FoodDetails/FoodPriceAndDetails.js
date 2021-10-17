import React from 'react';

const FoodPriceAndDetails = (props) => {

    return (
      <div>
        <div>
          <h1 className="py-3">{props.foodItem?.f_name}</h1>
          <p>{props.foodItem?.f_text}</p>
          <div className="d-md-flex align-items-center py-4">
            <div className="me-md-3 pe-md-4">
              <h2>${props.newfoodAmount}</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button className="btn border mx-2" onClick={props.minusPrice}>
                <i className="fas fa-minus"></i>
              </button>
              <h3>{props.foodAmount}</h3>
              <button className="btn border mx-2" onClick={props.plusPrice}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FoodPriceAndDetails;