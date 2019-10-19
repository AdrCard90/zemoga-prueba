import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import cristina from '../../assets/images/cristina-fernandez.jpg';
import kanye from '../../assets/images/kanye-west.jpg';
import malala from '../../assets/images/malala-yousafzai.jpg';
import mark from '../../assets/images/mark-zuckerberg.jpg';
import './CelebritiesList.scss';


const CelebritiesList = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 list">
          <h1 className="list__title">Votes</h1>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="celebrity" style={{ backgroundImage: `url(${kanye})`}}>
                <div className="celebrity__header">
                  <FontAwesomeIcon className="celebrity__decision positive" icon={faThumbsUp} />
                  <h1 className="celebrity__name">Kanye West</h1>
                </div>
                <div className="celebrity__content">
                  <p className="celebrity__publication"><strong>1 month ago</strong> in Entertainment</p>
                  <p className="celebrity__summary">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
                  <div className="celebrity__votes">
                    <FontAwesomeIcon className="celebrity__vote positive selected" icon={faThumbsUp} />
                    <FontAwesomeIcon className="celebrity__vote negative rotated-180" icon={faThumbsUp} />
                    <button className="celebrity__button">Vote now</button>
                  </div>
                </div>
                <div className="celebrity__percentages">
                  <div className="celebrity__percentages-bar positive bar-positive opacity-positive" style={{ width: "64%" }}>
                    <FontAwesomeIcon className="celebrity__percentages-icon" icon={faThumbsUp} />
                    <span className="celebrity__percentages-percentage">64%</span>
                  </div>
                  <div className="celebrity__percentages-bar negative bar-negative opacity-negative" style={{ width: "36%" }}>
                    <span className="celebrity__percentages-percentage">36%</span>
                    <FontAwesomeIcon className="celebrity__percentages-icon rotated-180" icon={faThumbsUp} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="celebrity" style={{ backgroundImage: `url(${mark})`}}>
                <div className="celebrity__header">
                  <FontAwesomeIcon className="celebrity__decision negative rotated-180" icon={faThumbsUp} />
                  <h1 className="celebrity__name">Mark Zuckerberg</h1>
                </div>
                <div className="celebrity__content">
                  <p className="celebrity__publication"><strong>1 month ago</strong> in Business</p>
                  <p className="celebrity__summary">Thank you for voting!</p>
                  <div className="celebrity__votes">
                    <button className="celebrity__button">Vote again</button>
                  </div>
                </div>
                <div className="celebrity__percentages">
                  <div className="celebrity__percentages-bar positive bar-positive opacity-positive" style={{ width: "36%" }}>
                    <FontAwesomeIcon className="celebrity__percentages-icon" icon={faThumbsUp} />
                    <span className="celebrity__percentages-percentage">36%</span>
                  </div>
                  <div className="celebrity__percentages-bar negative bar-negative opacity-negative" style={{ width: "64%" }}>
                    <span className="celebrity__percentages-percentage">64%</span>
                    <FontAwesomeIcon className="celebrity__percentages-icon rotated-180" icon={faThumbsUp} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="celebrity" style={{ backgroundImage: `url(${cristina})`}}>
                <div className="celebrity__header">
                  <FontAwesomeIcon className="celebrity__decision negative rotated-180" icon={faThumbsUp} />
                  <h1 className="celebrity__name">Cristina Fernández de Kirchner</h1>
                </div>
                <div className="celebrity__content">
                  <p className="celebrity__publication"><strong>1 month ago</strong> in Politics</p>
                  <p className="celebrity__summary">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
                  <div className="celebrity__votes">
                    <FontAwesomeIcon className="celebrity__vote positive selected" icon={faThumbsUp} />
                    <FontAwesomeIcon className="celebrity__vote negative rotated-180" icon={faThumbsUp} />
                    <button className="celebrity__button">Vote now</button>
                  </div>
                </div>
                <div className="celebrity__percentages">
                  <div className="celebrity__percentages-bar positive bar-positive opacity-positive" style={{ width: "36%" }}>
                    <FontAwesomeIcon className="celebrity__percentages-icon" icon={faThumbsUp} />
                    <span className="celebrity__percentages-percentage">36%</span>
                  </div>
                  <div className="celebrity__percentages-bar negative bar-negative opacity-negative" style={{ width: "64%" }}>
                    <span className="celebrity__percentages-percentage">64%</span>
                    <FontAwesomeIcon className="celebrity__percentages-icon rotated-180" icon={faThumbsUp} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="celebrity" style={{ backgroundImage: `url(${malala})`}}>
                <div className="celebrity__header">
                  <FontAwesomeIcon className="celebrity__decision negative rotated-180" icon={faThumbsUp} />
                  <h1 className="celebrity__name">Mark Zuckerberg</h1>
                </div>
                <div className="celebrity__content">
                  <p className="celebrity__publication"><strong>1 month ago</strong> in Business</p>
                  <p className="celebrity__summary">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
                  <div className="celebrity__votes">
                    <FontAwesomeIcon className="celebrity__vote positive selected" icon={faThumbsUp} />
                    <FontAwesomeIcon className="celebrity__vote negative rotated-180" icon={faThumbsUp} />
                    <button className="celebrity__button">Vote now</button>
                  </div>
                </div>
                <div className="celebrity__percentages">
                  <div className="celebrity__percentages-bar positive bar-positive opacity-positive" style={{ width: "64%" }}>
                    <FontAwesomeIcon className="celebrity__percentages-icon" icon={faThumbsUp} />
                    <span className="celebrity__percentages-percentage">64%</span>
                  </div>
                  <div className="celebrity__percentages-bar negative bar-negative opacity-negative" style={{ width: "36%" }}>
                    <span className="celebrity__percentages-percentage">36%</span>
                    <FontAwesomeIcon className="celebrity__percentages-icon rotated-180" icon={faThumbsUp} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebritiesList;
