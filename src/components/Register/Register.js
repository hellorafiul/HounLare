import React, { useState } from 'react';
import './Register.css'
import register from '../../images/register.svg'
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
const Register = () => {
  const { handleGoogleLogin, user, handleUserRegister, handleUserLogin } = useFirebase();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleRegister = () => {
    handleUserRegister(email, password)
  }
  const handleLogin = () => {
    handleUserLogin(email, password)
  }

  // console.log(email, password)
  return (
    <section className="register">
      <div className="container">
        <h2 className="text-center mt-md-5">Create an Account to Get appointment</h2>
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <div className="title1 mb-50">
              <h3 className="pb-2">Register Now!</h3>
            </div>
            <div className="contact_page3__form">
              <div id="contact-form" action="" >
                <div className="row">
                  <div className="col-md-8 pb-3">
                    <input onChange={handleEmail} className="form-control" type="email" name="email" placeholder="Email Address*" required />
                  </div>
                  <div className="col-md-8 pb-3">
                    <input onChange={handlePassword} className="form-control" type="password" name="password" placeholder="Your Password*" />
                  </div>
                  <div className="col-lg-12 broder">
                    <button onClick={handleRegister} className="btn-register me-3">Register <i className="fas fa-angle-double-right"></i></button>
                    <Link to="/login"><p className="mt-2">Already have an Account? Login Now!</p></Link>
                  </div>
                </div>
                <p className="form-message"></p>
              </div>
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