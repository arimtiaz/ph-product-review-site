import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import './Home.css'
import Review from '../Reviews/Review';

const Home = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])


    return (
        <div className='home'>
            {/* Hero Section */}
            <div className="hero">
                <div className="home-texts">
                    <h1 className='mt-5'>Only Solid Reviews Of <br /> <b>Harley Reviews</b></h1>
                     <Button variant='warning' className='mt-3'>
                    <FontAwesomeIcon icon={faVideo} className='me-3'></FontAwesomeIcon>
                        Watch Video
                    </Button>
           </div>
                <div className="home-img">
                <img className='img-size' src="/src/images/bike.png" alt="" />
                </div>
                </div>
            {/* Review Section */}
            <div className="review-heading">
                        <h1>What Our Community Say</h1>
                    </div>
                <div className="review-section">
                    <div className="review-container">                          
                        <div className="review-products">
                        {
                            reviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Home;