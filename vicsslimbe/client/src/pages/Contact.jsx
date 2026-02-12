import React from "react";

function Contact() {
  return (
    <section className="page-card">
      <h1>Contact</h1>
      <form className="form-grid">
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" />
        </label>
        <button type="button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
