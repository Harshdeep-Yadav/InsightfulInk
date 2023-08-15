import React from "react";
import Slide from "react-reveal/Slide";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <Slide bottom cascade>
        <div>
          <h2 style={{ color: "darkgray" }}>Contact Us</h2>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </Slide>
    </div>
  );
};

export default Contact;
