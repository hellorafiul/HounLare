import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <div id="contact" class="d-flex justify-content-center py-5 align-items-center">
      <div class="col-md-4 container">
        <div class="card contact text-center card-form">
          <div class="card-body">
            <h3>Contact Us</h3>
            <p>Please fill out this form to submit details</p>
            <form>
              <div class="form-group my-3 d-flex">
                <input type="text" class="form-control me-3" placeholder="First Name" />
                <input type="text" class="form-control" placeholder="Last Name" />
              </div>
              <div class="form-group my-3">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="form-group my-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your Message" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-light btn-block w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Contact;