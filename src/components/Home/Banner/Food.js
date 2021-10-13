import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Food = (props) => {
    const { f_name, f_img, f_price, f_text } = props.food;
    return (
        <Col>
        <Card className="py-3 border-0 cart">
          <img src={f_img} className="img-fluid w-50 my-3 mx-auto" alt="" />
          <h6>{f_name}</h6>
          <p>{f_text}</p>
                <h3>${f_price}</h3>
                
                <button className="w-25 mx-auto btn btn-danger rounded-pill my-3">Details</button>
    </Card>
</Col>
    );
};



    // <Card.Img variant="top" src="holder.js/100px160" />
    // <Card.Body>
    //   <Card.Title>Card title</Card.Title>
    //   <Card.Text>
    //     This is a longer card with supporting text below as a natural lead-in to
    //     additional content. This content is a little bit longer.
    //   </Card.Text>
    // </Card.Body>
  
export default Food;