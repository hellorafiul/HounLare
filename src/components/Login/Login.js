import React, { useState } from 'react';
import './Login.css'
import register from '../../images/register.svg'
import { Link, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
const Login = () => {
  const { handleGoogleLogin, user, handleUserRegister, handleUserLogin } = useFirebase();
  const location = useLocation()
  const history = useHistory()
  const redirect_url = location.state?.from || '/home'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirectGoogleSignin = () => {
    handleGoogleLogin()
      .then((result) => {
        history.push(redirect_url)
      })
  };

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
              <h3 className="pb-2">Login Now!</h3>
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
                    <button onClick={handleLogin} className="btn-register">Login <i className="fas fa-angle-double-right"></i></button>
                    <Link to="/register"><p onClick={handleRegister} className="me-3 mt-2">Don't have an account? Register Now!</p></Link>
                  </div>
                </div>
                <p className="form-message"></p>
              </div>
            </div>
            <div>
              <p>Or SignIn with...</p>
              <div>
                <Link onClick={redirectGoogleSignin} to=""><i className="fab fa-google">oogle</i></Link>
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

export default Login;