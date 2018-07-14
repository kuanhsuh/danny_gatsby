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
      <form className="mt20">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="10" />
        </div>
        <button className="btn-outline btn-md">SUBMIT</button>
      </form>
    </section>
  </div>
);

export default Contact;
