import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <div id="contact" className="d-flex justify-content-center py-5 align-items-center">
      <div className="col-md-4 container">
        <div className="card contact text-center card-form">
          <div className="card-body">
            <h3>Contact Us</h3>
            <p>Please fill out this form to submit details</p>
            <form>
              <div className="form-group my-3 d-flex">
                <input type="text" className="form-control me-3" placeholder="First Name" />
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
              <div className="form-group my-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group my-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your Message" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-light btn-block w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Contact;