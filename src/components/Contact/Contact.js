import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

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
            <input type="text" ref={nameRef} name="name" />
          </div>
          <div className="contact__item">
            <label htmlFor="name">Email: </label>
            <input type="text" ref={emailRef} name="email" />
          </div>
          <div className="contact__item">
            <label htmlFor="name">Message: </label>
            <textarea type="text" ref={messageRef} name="message" />
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
