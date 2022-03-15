import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
     const [service, setService] = useState([]);

     useEffect(() => {
          fetch('http://localhost:5000/services')
               .then(res => res.json())
               .then(data => {
                    setService(data)
                    console.log(data);
               })
     }, [])

     return (
          <div>
               {
                    // service.map(x => <Service x={x} key={x._id}></Service>)
               }
          </div>
     );
};

export default Services;