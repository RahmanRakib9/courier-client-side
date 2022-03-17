import React from 'react';
import deliveyImg from '../../../images/delivery.png';
import './AboutUs.css';

const AboutUs = () => {
     return (
          <section style={{ marginTop: '5%' }}>

               <div className='row w-100'>
                    <div className='col-md-6'>
                         <img src={deliveyImg} alt="" style={{ height: '100%', width: '100%' }} />
                    </div>

                    <div className='col-md-6 d-flex justify-content-center align-items-center text-center'>
                         <div>
                              <h5 style={{color:'gray'}}>Who are Dr Courier?</h5>
                              <h1>Best Courier & Parcel <br /> Services</h1>
                              <small style={{color:'gray'}}>Dr Courier is Bangladesh’s most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2022, our vision has been to become the operating system for e-commerce in Bangladesh, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge technology capabilities.

                                   We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs.</small>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default AboutUs;