import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import Services from '../Services/Services';
import WorkingProcess from '../WorkingProcess/WorkingProcess';

const Home = () => {
     return (
          <div>
               <NavbarComponent></NavbarComponent>
               <Banner></Banner>
               <AboutUs></AboutUs>
               <Services ></Services>
               <WorkingProcess></WorkingProcess>
          </div>
     );
};

export default Home;