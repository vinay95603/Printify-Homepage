import React from 'react';
import Printify from "../images/Printify.jpg";

function Hero() {
  return (
    <div className="hero">
      <img src={Printify} alt="Printify Logo" />
      <div className="hero-content">
        <h1>Welcome to Printify </h1>
          <h1> Inspired Homepage</h1>
        <p>Get started with our print-on-demand</p>
        <p>services today!</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Hero;