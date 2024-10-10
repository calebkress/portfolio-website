import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      <p>You can reach me using any of the following methods:</p>
      <div className="contact-details">
        <p><strong>Phone:</strong> <a href="tel:+15125602293">(512)-560-2293</a></p>
        <p><strong>Email:</strong> <a href="mailto:calebkress@gmail.com">calebkress@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/calebkress" target="_blank" rel="noopener noreferrer">linkedin.com/in/calebkress</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/calebkress" target="_blank" rel="noopener noreferrer">github.com/calebkress</a></p>
      </div>
    </section>
  );
};

export default Contact;
