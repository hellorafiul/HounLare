import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';
const Service = (props) => {
  const { name, img, des, id } = props.service;
  return (
    <div class="col-md-4 mb-4">
      <div class="card h-100 text-center">
        <img src={img} class="card-img-top w-25 mx-auto" alt="..." />
        <div class="card-body mb-2">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{des.substring(0, 190)}...</p>
          <Link to={`service/${id}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;