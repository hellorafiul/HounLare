import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Booking.css'

const Booking = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  const [service, setService] = useState({});


  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  useEffect(() => {
    const singleService = services.find(service => service.id == serviceId)
    setService(singleService)
  }, [services])

  return (
    <div className='my-5'>
      <div id="booking" className=' text-center mb-5 px-5'>
        <h1 className='pt-5 text-light d-block'>Make an Appointment!</h1>
        <p className='pt-2 text-light pb-3'>
          Here you can get doctors available time & you can get your perfect visiting time to hospital.</p>
      </div>
      <div className='container booking'>
        <div className="row">
          <div className="col-md-4 ">
            <img className='img-fluid mx-auto d-block' src={service?.img} alt="" />
          </div>
          <div className="col-md-8">
            <h2 className='pb-3 fw-bold'>{service?.name}</h2>
            <p>{service?.des}</p>
            <Link to='/service'>Back to All Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;