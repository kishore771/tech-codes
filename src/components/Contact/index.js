import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './index.css';
import Header from '../Header';
import Footer from '../Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_i42m8a8',
        'template_1h9670v',
        e.target,
        'kH8X9pBehleCBrno3'
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          setSubmitted(true);
          setFormData({ user_name: '', user_email: '', message: '' });
          setTimeout(() => setSubmitted(false), 2000);
        },
        (error) => {
          console.log('Error sending message:', error.text);
        }
      );
  };

  return (
    <div className="page-wrapper">
      <Header />
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me with any questions or opportunities.</p>
        {submitted && (
          <p className="success-message">
            Thank you for your message. I'll get back to you soon.
          </p>
        )}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
