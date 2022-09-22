import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            {/* Hero Section */}
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
            {/* Review Section */}
        </div>
    );
};

export default Home;