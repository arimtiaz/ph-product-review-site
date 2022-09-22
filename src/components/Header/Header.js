import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

const Header = () => {
    return (
    <div>
        <Navbar className='navigation-bar'>
            <Container className='nav-bar'>
            <Nav className="me-auto">
                <Nav.Link className='nav-texts' href="/home">Home</Nav.Link>
                <Nav.Link className='nav-texts' href="/reviews">Reviews</Nav.Link>
                <Nav.Link className='nav-texts' href="/blogs">Blogs</Nav.Link>
                <Nav.Link className='nav-texts' href="/dashboard">Dashboard</Nav.Link>
            </Nav>
            </Container>
      </Navbar>
    </div>
    );
};

export default Header;