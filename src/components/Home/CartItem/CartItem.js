import React from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAddToCart } from "../../../Context/AddtoCart";
import useAuth from "../../../Hooks/useAuth";


import notfound from "../../../Images/no-product-found.jpg";
const CartItem = () => {
  const { addingFood } = useAddToCart();
  const { user } = useAuth();
 

  let price = 0;
  for (const food of addingFood) {
    console.log(food.f_price);
    price = food.f_price + price;
  }
  const taxRate = price % 5
  const delivery = price % 20;
  const total = taxRate + price + delivery;
 
 
  return (
    <section className="my-5 py-4">
      <div className="container py-5 my-5">
        <div className="row align-items-center">
          <div className="col-md-7 ">
            <Form className="w-50 mx-auto shadow p-4 rounded-3">
              <Row className="mb-3 ">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={user?.displayName}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Button variant="danger" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-md-5">
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
                <div>
                  <div>
                    <h5>
                      From{" "}
                      <span className="fw-bold">
                        Gulshan Plaza Restaura GPR
                      </span>
                    </h5>
                    <p>Arriving in 20-30 min</p>
                    <p>107 Rd No 8</p>
                  </div>
                  <section className="overflow-scroll">
                    {addingFood.map((addFood) => (
                      <div key={addFood.id} className="container my-2 d-flex">
                        <div className="row justify-content-center align-items-center border shadow rounded-3 p-2 mx-auto">
                          <div className="col-md-4 w-25">
                            <img
                              src={addFood?.f_img}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-md-4">
                            <p>{addFood?.f_name}</p>
                            <h5>$ {addFood?.f_price.toFixed(2)}</h5>
                            
                          </div>
                          <div className="col-md-4">

                              Food Quantity:<span className="fw-bold px-1">{addFood?.quantity}</span>
 
                          </div>
                        </div>
                      </div>
                    ))}
                  </section>
                  <section>
                    <div className="pt-4">
                      <div className="d-flex justify-content-around">
                        <h6 className="w-25 text-start">SubTotal :</h6>
                        <h6>${price.toFixed(2)}</h6>
                      </div>

                      <div className="d-flex justify-content-around">
                        <h6 className="w-25 text-start">Tax:</h6>
                        <h6>${taxRate.toFixed(2)}</h6>
                      </div>

                      <div className="d-flex justify-content-around border-bottom pb-2">
                        <h6 className="w-25 text-start">Delivery fee:</h6>
                        <h6>${delivery.toFixed(2)}</h6>
                      </div>

                      <div className="d-flex justify-content-around">
                        <h6 className="w-25 text-start">Total:</h6>
                        <h6>${total.toFixed(2)}</h6>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
