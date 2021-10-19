import React from 'react';
import './About.css'
import aboutImg from '../../images/about.jpg'
import maintenance from '../../images/maintenance.png'
import payment from '../../images/payment.png'
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div id="about" className=' text-center'>
        <h1 className='text-light d-block'>Check out with quick view!</h1>
        <p className='pt-2 text-light lead pb-3'>Why HounLare services is best all time since 1990. </p>
      </div>
      <div className='container my-5'>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img className="img-fluid p-5" src={aboutImg} alt="" />
          </div>
          <div className="col-md-6 about-right">
            <div className="about1__wrapper">
              <div className="title1">
                <h4>About The HunLare</h4>
                <h2>We’re lanced most <span>powerful treatment</span> system. They are making
                  beautifully.</h2>
              </div>
              <div className="about1__content">
                <p>Every patient getting best care from us. again is there anyone who of itself,
                  because it is pain, but because occasionally circumstance procure him some great
                  pleasure. </p>
                <div className="d-flex">
                  <div className="pe-2 ps-5">
                    <img src={maintenance} alt="About" />
                  </div>
                  <p>Maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people.</p>
                </div>
                <div className="d-flex">
                  <div className="pe-2 ps-5">
                    <img src={payment} alt="About" />
                  </div>
                  <p>CarePayment partners with healthcare providers to dramatically improve their financial health by offering 0.00% APR financing to their patients, so people can get and pay for the care they need, when they need it, without high out of pocket costs getting in the way.</p>
                </div>
                <div className="about-btn">
                  <Link to="/contact" className="hl-btn-primary"> <span>Book Now</span> <i className="fas fa-angle-double-right btn-i"></i> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;