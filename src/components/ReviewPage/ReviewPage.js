import React, { useEffect, useState } from 'react';
import Review from '../Reviews/Review';
import './ReviewPage.css'

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className='review-section'>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default ReviewPage;