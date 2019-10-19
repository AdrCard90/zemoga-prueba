import { faFacebookSquare, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-12 footer">
          <nav className="footer__menu">
            <Link to="/terms-and-conditions" className="footer__menu-item">
              Terms and Conditions
            </Link>
            <Link to="/privacy-policy" className="footer__menu-item">
              Privacy Policy
            </Link>
            <Link to="/contact-us" className="footer__menu-item">
              Contact Us
            </Link>
          </nav>
          <div className="footer__media">
            <p className="footer__text">Follow Us</p>
            <a href="https://www.facebook.com/Zemoga/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="footer__icon" icon={faFacebookSquare} />
            </a>
            <a href="https://twitter.com/Zemoga" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="footer__icon" icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
