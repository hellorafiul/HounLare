import React from 'react';
import './Appointment.css'
import { Link } from 'react-router-dom';

const Appointment = () => {
  return (
    <section id="appointment">
      <div class="container pt-5">
        <div class="row">
          <div class="col-md-4 mb-5">
            <div class="appointment4__item text-center">
              <div class="appointment4__thumb-wrapper">
                <div class="appointment4__thumb">
                  <i class="fas fa-map-marked-alt"></i>
                </div>
              </div>
              <h5><Link to="#">Our Location</Link></h5>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="appointment4__item text-center">
              <div class="appointment4__thumb-wrapper">
                <div class="appointment4__thumb">
                  <i class="fas fa-hand-holding-medical"></i>
                </div>
              </div>
              <h5><Link to="#">Daily Home Care</Link></h5>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="appointment4__item text-center">
              <div class="appointment4__thumb-wrapper">
                <div class="appointment4__thumb">
                  <i class="fas fa-business-time"></i>
                </div>
              </div>
              <h5><Link to="#">Opening Hours</Link></h5>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="appointment4__item text-center">
              <div class="appointment4__thumb-wrapper">
                <div class="appointment4__thumb">
                  <i class="fas fa-stethoscope"></i>
                </div>
              </div>
              <h5><Link to="#">Emergency Doctors</Link></h5>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="appointment4__item text-center">
              <div class="appointment4__thumb-wrapper">
                <div class="appointment4__thumb">
                  <i class="fas fa-ambulance"></i>
                </div>
              </div>
              <h5><Link to="#">Ambulance</Link></h5>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="appointment4__item text-center">
              <div class="appointment4__thumb-wrapper">
                <div class="appointment4__thumb">
                  <i class="fas fa-phone"></i>
                </div>
              </div>
              <h5><Link to="#">Contact Us</Link></h5>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="appointment4__content">
              <h3>We assured to you that we will provide responsible treatment
                to you. It’s our duty for any <span className='hero-special'>patients</span>. More information below.</h3>
              <ul>
                <li><Link to="#">About us <span>.</span></Link></li>
                <li><Link to="#">All Services <span>.</span></Link></li>
                <li><Link to="#">Quick Appointment <span>.</span></Link></li>
                <li><Link to="#">Home Care</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;