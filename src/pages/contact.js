import React from "react";
import Header from "components/header/header";
import "styles/contactPage.scss";

const Contact = () => (
  <div>
    <Header text="contact" type="rainbow" />
    <section className="contact">
      <h4>
        Got a question? Just drop me a message. I will respond as soon as
        possible
      </h4>
      <form
        className="mt20"
        name="dannywebdev-contact"
        method="POST"
        netlify-honeypot="bot-field"
        netlify
      >
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="10" required />
        </div>
        <div data-netlify-recaptcha />
        <button className="btn-outline btn-md">SUBMIT</button>
      </form>
    </section>
  </div>
);

export default Contact;
