import React, { useState } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIceCream, faSmile, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showFAQ, setShowFAQ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <div className="contact-us-container">
      <div className="icon-columnn left">
        {[...Array(20)].map((_, i) => (
          <FontAwesomeIcon key={`left-${i}`} icon={i % 2 === 0 ? faIceCream : faSmile} className={`icon-${i % 20}`} />
        ))}
      </div>

      <div className="contact-us-page">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <button className="faq-toggle-button" onClick={toggleFAQ}>
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span className="tooltip">FAQ</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit">Send Message</button>
        </form>
        {showFAQ && (
          <div className="faq-section">
            <h2>Frequently Asked Questions (FAQ)</h2>
            <div className="faq-item">
              <h3>How do I place an order?</h3>
              <p>To place an order, navigate to our <a href="/menu">menu page</a>, select your desired items, and proceed to checkout.</p>
            </div>
            <div className="faq-item">
              <h3>What are your delivery areas, times, and pickup options?</h3>
              <p>We deliver to all major areas in the city from 9am to 9pm, Monday to Friday. Pickup options are also available at our store during these hours.</p>
            </div>
            <div className="faq-item">
              <h3>Can you provide descriptions of menu items, including ingredients and dietary information?</h3>
              <p>Yes, detailed descriptions, ingredients, and dietary information for each menu item can be found on our <a href="/menu">menu page</a>.</p>
            </div>
            <div className="faq-item">
              <h3>How can I reach customer support for further assistance?</h3>
              <p>If you need further assistance, please use the form above to contact us, or visit our <a href="/contactus">Contact Us</a> page for more options.</p>
            </div>
          </div>
        )}
      </div>

      <div className="icon-columnn right">
        {[...Array(20)].map((_, i) => (
          <FontAwesomeIcon key={`right-${i}`} icon={i % 2 === 0 ? faIceCream : faSmile} className={`icon-${i % 20}`} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
