import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bd2y8c9', "template_2bm8zxp", e.target, "user_Cx7GqutdvMhhgf5ZtA4wJ").then(res => {
      alert('successfully sent');

    }).catch((err) => {
      console.log(err);
    });
    e.target.reset();
  };
  return (
    <div className="contact">
      <form className="contact__container" onSubmit={handleSubmit}>
        <div className="contact__head">Contact Us</div>
        <div className="contact__body">
          <div className="contact__item">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" />
          </div>
          <div className="contact__item">
            <label htmlFor="name">Email: </label>
            <input type="text" name="email" />
          </div>
          <div className="contact__item">
            <label htmlFor="name">Message: </label>
            <textarea type="text" name="message" />
          </div>
          <div className="contact_btn">
            <button type="submit">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
