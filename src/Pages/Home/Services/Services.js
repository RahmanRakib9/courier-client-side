import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
     const [service, setService] = useState([]);

     useEffect(() => {
          fetch('http://localhost:5000/services')
               .then(res => res.json())
               .then(data => {
                    setService(data)
                    console.log(data);
               })
     }, [])

     return (
          <Container>
               <div style={{ marginTop: '10%' }}>
                    <header style={{ textAlign: 'center' }}>
                         <h1>OUR <b>SERVICES</b></h1>
                         ----- <FontAwesomeIcon icon={faTruck} fontSize='2em' style={{ color: 'red' }} /> -----
                    </header>
                    <div className='services-container mt-5'>
                         {
                              service.map(x => <Service x={x} key={x._id}></Service>)
                         }
                    </div>
               </div>
          </Container>
     );
};

export default Services;