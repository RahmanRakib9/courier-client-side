import React from 'react';

const Service = ({ x }) => {
     const { name, image, description } = x;
     return (
          <div>
               <img src={image} alt="" />
               <h1>{name}</h1>
               <h4>{description}</h4>
          </div>
     );
};

export default Service;