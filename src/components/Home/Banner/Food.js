import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Food = (props) => {
    const { id,f_name, f_img, f_price, f_text} = props.food;
    return (
      <Col>
        <Card className="py-3 border-0 cart">
          <img src={f_img} className="img-fluid w-50 my-3 mx-auto" alt="" />
          <h6>{f_name}</h6>
          <p>{f_text}</p>
          <h3>${f_price}</h3>
     

                <Link to={`/foodDetails/${id}`}>
                    <button className="w-25 mx-auto btn btn-danger rounded-pill my-3">
            Details
          </button>
                </Link>
        </Card>
      </Col>
    );
};

  
export default Food;