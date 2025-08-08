import React from "react";

const Contact = () => (
  <section className="container my-5">
    <h2>Contact</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea className="form-control" id="message" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  </section>
);

export default Contact;
