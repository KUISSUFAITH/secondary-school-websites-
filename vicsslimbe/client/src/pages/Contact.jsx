<<<<<<< HEAD
import React from "react";

=======
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
function Contact() {
  return (
    <section className="page-card">
      <h1>Contact</h1>
      <form className="form-grid">
        <label>
          Name
<<<<<<< HEAD
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" />
=======
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" placeholder="Write your message here" />
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
        </label>
        <button type="button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
