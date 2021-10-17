import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAddToCart } from "../../../Context/AddtoCart";

import notfound from "../../../Images/no-product-found.jpg";
const CartItem = () => {
  const { addingFood } = useAddToCart();
  return (
    <div className="mt-5 pt-5 ">
      {addingFood.length === 0 ? (
        <div className="d-flex flex-column align-items-center">
          {" "}
          <img src={notfound} alt="" className="img-fluid w-25" />
          <Link to="/allFoods">
            <button className="btn btn-danger">All Foods</button>
          </Link>
        </div>
      ) : (
        addingFood.map((addFood) => (
          <div key={addFood.id} className="container my-5 d-flex">
            <div
              style={{ width: "28rem" }}
              className="d-flex text-start justify-content-evenly align-items-center"
            >
              <Card.Img
                variant="top"
                src={addFood?.f_img}
                className="img-fluid w-50 mx-auto pt-3"
              />
              <Card.Body>
                <Card.Title>{addFood?.f_name}</Card.Title>
                <Card.Text>{addFood?.f_text}</Card.Text>
                <h2>Total Price: ${addFood?.f_price}</h2>
              </Card.Body>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItem;
