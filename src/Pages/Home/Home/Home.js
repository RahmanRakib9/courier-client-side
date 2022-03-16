import React from 'react';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import Services from '../Services/Services';

const Home = () => {
     return (
          <div>
               <NavbarComponent></NavbarComponent>
               <Services ></Services>
          </div>
     );
};

export default Home;