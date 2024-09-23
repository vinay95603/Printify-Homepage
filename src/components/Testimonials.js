import React from 'react';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"

function Testimonials() {
  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-grid">
        <div className="testimonial-item">
          <img src={img1} alt="Testimonial 1" />
          <p>"I was blown away by the quality of the prints and the fast shipping!"</p>
          <span>- Mayank</span>
        </div>
        <div className="testimonial-item">
          <img src={img3} alt="Testimonial 2" />
          <p>"The online designer was so easy to use, even my grandma could do it!"</p>
          <span>- Deepanshu</span>
        </div>
        <div className="testimonial-item">
          <img src={img2} alt="Testimonial 3" />
          <p>"I've never received so many compliments on my custom phone case!"</p>
          <span>- Vishal</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;