import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
  const { category, img, name, des, qua, phn, email } = props.doctor;
  return (
    <div className='row pb-5 doctor px-3'>
      <div className="col-md-4">
        <img className='d-block mx-auto pb-5' src={img} alt="" />
      </div>
      <div className="col-md-8">
        <h6>{category}</h6>
        <h2>{name}</h2>
        <p>{des}</p>
        <h5>{qua}</h5>
        <p>{phn}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Doctor;