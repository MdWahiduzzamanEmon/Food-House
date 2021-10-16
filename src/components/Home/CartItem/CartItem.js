import React from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const CartItem = () => {
    const { addingFood } = useAuth();
    return (
      <div className="height">
        {addingFood.map((addFood) => (
          <div key={addFood.id} className="container my-5 d-flex">
            <div style={{ width: "28rem" }} className="d-flex text-start justify-content-evenly align-items-center">
              <Card.Img
                variant="top"
                src={addFood?.f_img}
                className="img-fluid w-50 mx-auto pt-3"
              />
              <Card.Body>
                <Card.Title>{addFood?.f_name}</Card.Title>
                        <Card.Text>{addFood?.f_text}</Card.Text>
                        <h2>Total Price: ${addFood?.f_price }</h2>
              </Card.Body>
            </div>
          </div>
        ))}
      </div>
    );
};

export default CartItem;