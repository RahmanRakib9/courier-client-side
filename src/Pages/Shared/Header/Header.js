import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { Container } from 'react-bootstrap';

const Header = () => {

     return (
          <section >
               <Container >
                    <section className='section-container' >
                         <div className='flex-container'>
                              <h6>We Provide Best Courier & Parcel Services</h6>
                              <div  >
                                   <div >
                                        <a href='https://www.facebook.com/ra.kib.9655806' target='_blank' > <FontAwesomeIcon icon={faFacebook} className='social-link' /></a>
                                        <a href="https://github.com/RahmanRakib99" target='_blank'><FontAwesomeIcon icon={faGithub} className='social-link' /></a>
                                        <a href="https://twitter.com/RahmanRakib10" target='_blank'><FontAwesomeIcon icon={faTwitter} className='social-link' /></a>
                                        <a href="https://www.instagram.com/rahman_rakib9/" target='_blank'><FontAwesomeIcon icon={faInstagram} className='social-link' /></a>
                                   </div>
                              </div>
                         </div>
                    </section>
               </Container>

          </section>
     );
};

export default Header;
//

