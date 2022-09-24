import React from 'react';
import Card from 'react-bootstrap/Card';


const Blogs = () => {
    return (
        <div>
            <Card style={{ width: '800px', height:'100px', margin:'10px', padding:'30px'}}>
      <Card.Body>
        <Card.Title>What is the purpose of Context Api?</Card.Title>
        <Card.Text>
        React structure that allows you to exchange unique details and assists in solving prop-drilling from all levels of your application
        </Card.Text>
      </Card.Body>
    </Card>
            <Card style={{ width: '800px', height:'150px', margin:'10px', padding:'30px'}}>
      <Card.Body>
        <Card.Title>What is symantic tag?</Card.Title>
        <Card.Text>
        The tags that provide meaning to an HTML page rather than just presentation
        </Card.Text>
      </Card.Body>
    </Card>
            <Card style={{ width: '800px', height:'150px', margin:'10px', padding:'30px'}}>
      <Card.Body>
        <Card.Title>Inline Vs Block element</Card.Title>
        <Card.Text>
        Inline elements do not force a new line to begin in the document flow.
 Block elements, on the other hand, typically cause a line break to occur
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Blogs;