import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';
const Service = (props) => {
  const { name, img, des, id } = props.service;
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center service">
        <img src={img} className="card-img-top w-25 mx-auto" alt="..." />
        <div className="card-body mb-2">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{des.substring(0, 160)} <span>. . .</span></p>
          <Link to={`service/${id}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;