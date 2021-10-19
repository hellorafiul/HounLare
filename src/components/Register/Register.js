import React from 'react';
import './Register.css'
import register from '../../images/register.svg'
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
const Register = () => {
  const { handleGoogleLogin, user } = useFirebase();
  console.log(user)

  return (
    <section className="register">
      <div className="container">
        <h2 className="text-center pt-5 mt-md-5">Create an Account to Get appointment</h2>
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <div className="title1 mb-50">
              <h3 className="pb-2">Register Now!</h3>
            </div>
            <div className="contact_page3__form">
              <form id="contact-form" action="" >
                <div className="row">
                  <div className="col-md-8 pb-3">
                    <input className="form-control" type="email" name="email" placeholder="Email Address*" required="" />
                  </div>
                  <div className="col-md-8 pb-3">
                    <input className="form-control" type="password" name="password" placeholder="Your Password*" />
                  </div>
                  <div className="col-lg-12 broder">
                    <button type="submit" className="btn-register me-3">Register <i className="fas fa-angle-double-right"></i></button>
                    <button type="submit" className="btn-register">Login <i className="fas fa-angle-double-right"></i></button>
                  </div>
                </div>
                <p className="form-message"></p>
              </form>
            </div>
            <div>
              <p>Or SignIn with...</p>
              <div>
                <Link onClick={handleGoogleLogin} to=""><i className="fab fa-google">oogle</i></Link>
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

export default Register;