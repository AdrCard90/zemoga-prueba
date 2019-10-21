import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./HighlightedCelebrityBox.scss";

const HighlightedCelebrityBox = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-sm-6 celebrity-box">
          <div className="celebrity-box__information">
            <p className="celebrity-box__text">What's your opinion on</p>
            <h1 className="celebrity-box__title">Pope Francis?</h1>
            <h2 className="celebrity-box__description">
              He's talking tough on clergy sexual abuse, but is he just another
              papal pervert protector? (thumbs down) or a true pedophile
              punishing pontiff? (thumbs up)
            </h2>
            <div className="celebrity-box__wikipedia">
              <FontAwesomeIcon
                className="celebrity-box__wikipedia-icon"
                icon={faWikipediaW}
              />
              <a
                href="https://en.wikipedia.org/wiki/Pope_Francis"
                className="celebrity-box__wikipedia-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                More information
              </a>
            </div>
            <h2 className="celebrity-box__question">What's Your Verdict?</h2>
          </div>
          <div className="celebrity-box__votes">
            <div className="celebrity-box__vote opacity-positive">
              <FontAwesomeIcon
                className="celebrity-box__icon"
                icon={faThumbsUp}
              />
            </div>
            <div className="celebrity-box__vote opacity-negative">
              <FontAwesomeIcon
                className="celebrity-box__icon rotated-180"
                icon={faThumbsUp}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedCelebrityBox;
