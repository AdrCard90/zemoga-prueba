import {
  faQuestionCircle,
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useEffect, useState } from "react";

const CelebrityBox = ({
  id,
  name,
  photo,
  category,
  publicationDate,
  description,
  positiveVotes,
  negativeVotes
}) => {
  const [votes, setVotes] = useState({ positive: 0, negative: 0 });
  const [activeVote, setActiveVote] = useState({
    positive: true,
    negative: false
  });
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`votes-celebrity-${id}`)) {
      setVotes(JSON.parse(localStorage.getItem(`votes-celebrity-${id}`)));
    } else {
      const initialVotes = { positive: positiveVotes, negative: negativeVotes };
      setVotes(initialVotes);
      localStorage.setItem(
        `votes-celebrity-${id}`,
        JSON.stringify(initialVotes)
      );
    }
  }, [id, positiveVotes, negativeVotes]);

  useEffect(() => {
    localStorage.setItem(`votes-celebrity-${id}`, JSON.stringify(votes));
  }, [id, votes]);

  return (
    <div className="col-12 col-sm-6 box">
      <div className="celebrity">
        <img
          src={require(`../../assets/images/${photo}`)}
          alt={name}
          className="celebrity__image"
        />
        <div className="celebrity__information">
          <div className="celebrity__header">
            {votes.positive === votes.negative ? (
              <FontAwesomeIcon
                className="celebrity__decision neutral"
                icon={faQuestionCircle}
              />
            ) : votes.positive > votes.negative ? (
              <FontAwesomeIcon
                className="celebrity__decision positive"
                icon={faThumbsUp}
              />
            ) : (
              <FontAwesomeIcon
                className="celebrity__decision negative rotated-180"
                icon={faThumbsUp}
              />
            )}

            <h1 className="celebrity__name">{name}</h1>
          </div>
          <div className="celebrity__content">
            <p className="celebrity__publication">
              <strong>{moment(publicationDate, "YYYYMMDD").fromNow()}</strong>
              {` in ${category}`}
            </p>
            {voted ? (
              <>
                <p className="celebrity__summary">Thank you for voting!</p>
                <div className="celebrity__votes">
                  <button
                    className="celebrity__button"
                    onClick={() => setVoted(!voted)}
                  >
                    Vote again
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="celebrity__summary">{description}</p>
                <div className="celebrity__votes">
                  <FontAwesomeIcon
                    className={`celebrity__vote positive ${
                      activeVote.positive ? "selected" : ""
                    }`}
                    icon={faThumbsUp}
                    onClick={() => {
                      setActiveVote({ positive: true, negative: false });
                    }}
                  />
                  <FontAwesomeIcon
                    className={`celebrity__vote negative rotated-180 ${
                      activeVote.negative ? "selected" : ""
                    }`}
                    icon={faThumbsUp}
                    onClick={() => {
                      setActiveVote({ positive: false, negative: true });
                    }}
                  />
                  <button
                    className="celebrity__button"
                    onClick={() => {
                      setVoted(!voted);
                      activeVote.positive
                        ? setVotes({ ...votes, positive: votes.positive + 1 })
                        : setVotes({ ...votes, negative: votes.negative + 1 });
                    }}
                  >
                    Vote now
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="celebrity__percentages">
            <div
              className="celebrity__percentages-bar positive bar-positive opacity-positive"
              style={{
                width: `${Math.round(
                  (votes.positive * 100) / (votes.positive + votes.negative)
                )}%`
              }}
            >
              <FontAwesomeIcon
                className="celebrity__percentages-icon"
                icon={faThumbsUp}
              />
              <span className="celebrity__percentages-percentage">
                {Math.round(
                  (votes.positive * 100) / (votes.positive + votes.negative)
                )}
                %
              </span>
            </div>
            <div className="celebrity__percentages-bar negative bar-negative opacity-negative">
              <span className="celebrity__percentages-percentage">
                {Math.round(
                  (votes.negative * 100) / (votes.positive + votes.negative)
                )}
                %
              </span>
              <FontAwesomeIcon
                className="celebrity__percentages-icon rotated-180"
                icon={faThumbsUp}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebrityBox;
