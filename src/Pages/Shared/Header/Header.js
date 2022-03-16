import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { Container } from 'react-bootstrap';

const Header = () => {
     return (
          <Container>
               <section className='section-container'>
                    <div className='flex-container'>
                         <h3>We Provide Best Courier & Parcel Services</h3>
                         <div  >
                              <div >
                                   <FontAwesomeIcon icon={faFacebook} className='social-link' />
                                   <FontAwesomeIcon icon={faGithub} className='social-link' />
                                   <FontAwesomeIcon icon={faTwitter} className='social-link' />
                                   <FontAwesomeIcon icon={faEnvelope} className='social-link' />
                              </div>
                         </div>
                    </div>
               </section>
          </Container>
     );
};

export default Header;

