function Contact() {
  return (
    <section className="page-card">
      <h1>Contact</h1>
      <form className="form-grid">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" placeholder="Write your message here" />
        </label>
        <button type="button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
