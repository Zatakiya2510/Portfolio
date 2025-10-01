import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const subject = encodeURIComponent('Work Inquiry');
    const body = encodeURIComponent(
      `Name: ${form.name.value}\nEmail: ${form.email.value}\n\nMessage:\n${form.message.value}`
    );
    window.location.href = `mailto:abhishekzatakiya25102004@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section container">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-grid">
        {/* Info Card */}
        <div className="contact-card info-card">
          <h3>Let's Connect</h3>
          <p>If you'd like to collaborate, hire me, or just say hi, send an email or fill out the form.</p>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:abhishekzatakiya25102004@gmail.com">abhishekzatakiya25102004@gmail.com</a></p>
            <p><strong>Phone:</strong> +91 6352342951</p>
          </div>
        </div>

        {/* Form Card */}
        <div className="contact-card form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="6" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
