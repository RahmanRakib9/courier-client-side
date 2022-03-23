import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ x }) => {
     const { name, image, description } = x;
     return (
          <div className='w-100'>
               <div className='service w-100'>
                    <Card style={{ border: 'none' }} className='shadow-lg'>
                         <Card.Img variant="top" src={image} />
                         <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>
                                   {description}
                              </Card.Text>
                         </Card.Body>
                    </Card>
               </div>
          </div>

     );
};

export default Service;




