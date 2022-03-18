import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLaptop, faTruck, faHome, faMale, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './WorkingProcess.css'

const WorkingProcess = () => {

     return (
          <section>
               <div className='section-header'>
                    <h1 style={{ marginTop: "5%" }}>OUR <b>PROCESS</b></h1>
                    ----- <FontAwesomeIcon icon={faTruck} fontSize='2em' style={{ color: 'red' }} /> -----
               </div>
               <div style={{ marginTop: '5%' }}>

                    <div className='display-container'>
                         <div>
                              <FontAwesomeIcon icon={faLaptop} fontSize='10em' className='horizontal-gap hover-effect' />
                              <p>Book Service <br /> (Online/Call/Email) <FontAwesomeIcon icon={faArrowRight} fontSize='1em' className='horizontal-gap' /> </p>

                         </div>
                         <div>
                              <FontAwesomeIcon icon={faTruck} fontSize='10em' className='horizontal-gap hover-effect' />
                              <p>Quick Pick Up and Packing <FontAwesomeIcon icon={faArrowRight} fontSize='1em' className='horizontal-gap' /> </p>
                         </div>

                         <div>
                              <FontAwesomeIcon icon={faHome} fontSize='10em' className='horizontal-gap hover-effect'/>
                              <p>Sorting At Nearest Hub <FontAwesomeIcon icon={faArrowRight} fontSize='1em' className='horizontal-gap' /> </p>
                         </div>

                         <div>
                              <FontAwesomeIcon icon={faMale} fontSize='10em' className='horizontal-gap hover-effect' />
                              <p>Delivery To Recipient <FontAwesomeIcon icon={faArrowRight} fontSize='1em' className='horizontal-gap' /> </p>
                         </div>
                    </div>

               </div>
          </section>
     );
};

export default WorkingProcess;
