import React from 'react';
import './Doctors.css'
import { useState, useEffect } from 'react';
import Doctor from './../Doctor/Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('/doctors.json')
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, [])
  return (
    <div>
      <div id="booking" className=' text-center mb-5 px-5'>
        <h1 className='pt-5 text-light d-block'>Make an Appointment!</h1>
        <p className='pt-2 text-light pb-3'>
          Here you can get doctors available time & you can get your perfect visiting time to hospital.</p>
      </div>
      <div className="container">
        {
          doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
        }
      </div>
    </div>
  );
};

export default Doctors;