import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';

const NavbarComponent = () => {
     return (
          <div>

               <Navbar bg="light" variant="dark" sticky="top" collapseOnSelect expand="lg">

                    <Container>

                         <Link to="/" className='brand-name'>DR COURIER</Link>

                         <Nav  >
                              <Link to="" className='navbar-item'>Home</Link>
                              <Link to="" className='navbar-item'>About Us</Link>
                              <Link to="" className='navbar-item'>Services</Link>
                              <Link to="" className='navbar-item'>Login</Link>
                         </Nav>

                    </Container>
               </Navbar>

          </div>
     );
};

export default NavbarComponent;