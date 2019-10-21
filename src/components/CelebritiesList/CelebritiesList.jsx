import React from "react";
import { dataCelebrities } from "../../data/celebrities";
import CelebrityBox from "../CelebrityBox/CelebrityBox";
import "./CelebritiesList.scss";

const CelebritiesList = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 list">
          <h1 className="list__title">Votes</h1>
          <div className="container">
            <div className="row">
              {dataCelebrities &&
                dataCelebrities.map(({ ...otherProps }, index) => (
                  <CelebrityBox key={index} {...otherProps} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebritiesList;
