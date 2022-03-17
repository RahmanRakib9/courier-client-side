import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLaptop, faTruck, faHome, faMale, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './WorkingProcess.css'

const WorkingProcess = () => {

     return (
          <div>
               <h1 style={{ textAlign: 'center',marginTop:"5%" }}>OUR PROCESS</h1>
               {/* ----- <FontAwesomeIcon className='section-top-icon' icon={faTruck} fontSize='1em' /> ----- */}
               <section style={{ marginTop: '5%' }}>

                    <div className='container'>
                         <div>
                              <FontAwesomeIcon icon={faLaptop} fontSize='10em' className='horizontal-gap' />
                              <p>Book Service <br /> (Online/Call/Email) <FontAwesomeIcon icon={faArrowRight} fontSize='1em' className='horizontal-gap' /> </p>

                         </div>
                         <div>
                              <FontAwesomeIcon icon={faTruck} fontSize='10em' className='horizontal-gap' />
                              {/* <FontAwesomeIcon icon={faArrowRight} fontSize='6em' className='horizontal-gap' /> */}
                              <p>Quick Pick Up and Packing <FontAwesomeIcon icon={faArrowRight} fontSize='1em' className='horizontal-gap' /> </p>
                         </div>
                         <div>
                              <FontAwesomeIcon icon={faHome} fontSize='10em' />
                              {/* <FontAwesomeIcon icon={faArrowRight} fontSize='6em' /> */}
                              <p>Sorting At Nearest Hub <FontAwesomeIcon icon={faArrowRight} fontSize='1em' className='horizontal-gap' /> </p>
                         </div>
                         <div>
                              <FontAwesomeIcon icon={faMale} fontSize='10em' className='horizontal-gap' />
                              {/* <FontAwesomeIcon icon={faArrowRight} fontSize='6em' /> */}
                              <p>Delivery To Recipient <FontAwesomeIcon icon={faArrowRight} fontSize='1em' className='horizontal-gap' /> </p>
                         </div>
                    </div>

               </section>
          </div>
     );
};

export default WorkingProcess;
