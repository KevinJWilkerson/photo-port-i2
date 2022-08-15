import React from "react";

function ContactForm() {
  <section>
    <h1>Contact me</h1>
    <form id="contact-form">
      <div>
        <label htmlfor="name">Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlfor="email">Email address:</label>
        <input type="text" name="email" />
      </div>
      <div>
        <label htmlfor="message">message:</label>
        <textarea name="message" rows="5" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>;
}

export default ContactForm;
