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
      {/* <form
        className="mt20"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="10"
            name="message"
            required
          />
        </div>
        <button className="btn-outline btn-md" type="submit">
          SUBMIT1
        </button>
      </form> */}
      <form
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
        <p>
          <label>
            Your name:<br />
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your email:<br />
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message:<br />
            <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </section>
  </div>
);

export default Contact;
