import React from "react";
import francis from "../../assets/images/popi-francis.jpg";
import HighlightedCelebrityBox from "../../components/HighlightedCelebrityBox/HighlightedCelebrityBox";
import "./HighlightedCelebrity.scss";

const HighlightedCelebrity = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <div
          className="col-12 highlighted"
          style={{ backgroundImage: `url(${francis})` }}
        >
          <HighlightedCelebrityBox />
          <div className="highlighted__days">
            <div className="col-4 highlighted__days-title">
              <p className="highlighted__closing-text">CLOSING IN</p>
            </div>
            <div className="col-8 highlighted__days-text">
              <p className="highlighted__closing-days">
                <strong>22</strong> days
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HighlightedCelebrity;
