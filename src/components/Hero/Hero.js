import React from 'react';
import './Hero.css'
const Hero = () => {
  return (
    <div>
      <section id='hero' className='pt-5'>
        <div className='container align-items-center pb-5'>
          <h5>Medical Center.</h5>
          <h1>Best<span className='hero-special'> Medical &</span><br />
            Health Care Center</h1>
          <p> Pleasure, but because those who do not know how to pursue<br />
            pleasure rationally extremely painful.</p>
          <button className='hl-btn-primary'><span>Learn More</span> <i className="fas fa-angle-double-right btn-i"></i></button>
        </div>
      </section>
    </div>
  );
};

export default Hero;