import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    const reviewPush = (reviews) =>{
        console.log(reviews)
    }

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
                <img src="/src/images/bike.png" alt="" />
                </div>
                </div>
            {/* Review Section */}
                <div className="review-section">
                    <div className="review-heading">
                        <h1>What Our Community Say</h1>
                        <button onClick={() => reviewPush(reviews)}>Dekho</button>
                    </div>
            </div>
        </div>
    );
};

export default Home;