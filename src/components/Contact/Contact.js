import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__head">Contact Us</div>
        <div className="contact__body">
          <div className="contact__item">
            <label htmlFor="name">Name: </label>
            <input type="text" />
          </div>
          <div className="contact__item">
            <label htmlFor="name">Email: </label>
            <input type="text" />
          </div>
          <div className="contact__item">
            <label htmlFor="name">Message: </label>
            <textarea type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
