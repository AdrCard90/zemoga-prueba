import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="container header">
      <div className="row">
        <div className="col-12 header__nav">
          <nav className="navbar navbar-expand-lg">
            <Link to="/" className="navbar-brand header__logo">
              Rule of Thumb.
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Link to="/past-trials" className="header__link">
                Past Trials
              </Link>
              <Link to="/how-it-works" className="header__link">
                How It Works
              </Link>
              <Link to="/login" className="header__link">
                Log In / Sign Up
              </Link>
              <FontAwesomeIcon className="header__icon" icon={faSearch} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
