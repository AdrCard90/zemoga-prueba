import React from 'react';
import { Link } from 'react-router-dom';
import './SubmitBanner.scss';

const SubmitBanner = () => {
  return (
    <aside className="container">
      <div className="row">
        <div className="col-12 banner">
          <h2 className="banner__text">Is there anyone else you would want us to add?</h2>
          <Link to="/add-celebrity">
            <button className="banner__button">
              Submit a Name
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SubmitBanner;
