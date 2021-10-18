import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from './../Service/Service';
const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('./Data.JSON')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <section id='services'>
      <div class="container">
        <div class="services text-center">
          <h4>Trusted service</h4>
          <h2>We’re lanched most powerful <br /> treatment system.
            They are <span>making beautifully</span>.</h2>
          <p>Every patient getting best care from us. again is there anyone who of itself, because
            it is pain, but because <br /> occasionally
            circumstance procure him some great pleasure.
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {
            services.map(service => <Service key={service.id} service={service}></Service>)
          }
        </div>
      </div>
    </section>
  );
};

export default Services;