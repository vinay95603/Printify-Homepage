import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      <div className="social-media">
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
