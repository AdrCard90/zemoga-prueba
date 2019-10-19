import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './MessageBanner.scss';

const MessageBanner = () => {
  return (
    <aside className="container">
      <div className="row">
        <div className="col-12 message">
          <div className="message__section">
            <h3 className="message__subtitle">Speak out. Be heard.</h3>
            <h2 className="message__title">Be counted</h2>
          </div>
          <p className="message__text">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.</p>
          <FontAwesomeIcon icon={faTimes} className="message__close"/>
        </div>
      </div>
    </aside>
  );
};

export default MessageBanner;
