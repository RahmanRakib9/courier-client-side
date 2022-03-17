import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import Services from '../Services/Services';

const Home = () => {
     return (
          <div>
               <NavbarComponent></NavbarComponent>
               <Banner></Banner>
               <AboutUs></AboutUs>
               <Services ></Services>
          </div>
     );
};

export default Home;