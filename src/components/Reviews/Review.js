import React from 'react';
import "./Review.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Button, Card, Container } from 'react-bootstrap';


const Review = (props) => {
    const {id, img, rating, name, say} = props.review;

    return (
        <div>
            <Container>
            <Card style={{ width: '420px', height: '250px'}}>
                 <Card.Body>
                        <Card.Img variant="top" src={img} />
                            <Card.Title>{name}</Card.Title>
                                <p><small>Rating: {rating} tars</small></p>
                            <Card.Text>
                                {say}
                            </Card.Text>
                     <Button variant='warning'>Load</Button>
                </Card.Body>
            </Card>
            </Container>
        </div>
    );
};

export default Review;