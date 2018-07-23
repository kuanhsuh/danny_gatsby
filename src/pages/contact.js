import React from "react";
import Header from "components/header/header";

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
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="form-control" type="text" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="10"
            name="message"
            required
          />
        </div>
        <button className="btn-outline btn-md" type="submit">
          SUBMIT
        </button>
      </form>
    </section>
  </div>
);

export default Contact;
