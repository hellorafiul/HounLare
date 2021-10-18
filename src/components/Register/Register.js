import React from 'react';
import './Register.css'
import register from '../../images/register.svg'
import { Link } from 'react-router-dom';
const Appointment2 = () => {
  return (
    <section class="register">
      <div class="container">
        <h2 className="text-center pt-5 mt-md-5">Create an Account to Get appointment</h2>
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <div class="title1 mb-50">
              <h3 class="pb-2">Register Now!</h3>
            </div>
            <div class="contact_page3__form">
              <form id="contact-form" action="" >
                <div class="row">
                  <div class="col-md-8 pb-3">
                    <input class="form-control" type="email" name="email" placeholder="Email Address*" required="" />
                  </div>
                  <div class="col-md-8 pb-3">
                    <input class="form-control" type="password" name="password" placeholder="Your Password*" />
                  </div>
                  <div class="col-lg-12 broder">
                    <button type="submit" class="btn-register me-3">Register <i class="fas fa-angle-double-right"></i></button>
                    <button type="submit" class="btn-register">Login <i class="fas fa-angle-double-right"></i></button>
                  </div>
                </div>
                <p class="form-message"></p>
              </form>
            </div>
            <div>
              <p>Or SignIn with...</p>
              <div>
                <Link to=""><i class="fab fa-google">oogle</i></Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img className='img-fluid w-75' src={register} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment2;