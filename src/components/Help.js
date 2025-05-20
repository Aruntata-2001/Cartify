import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './help.css';

const Help = () => {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/YOUR_TAWKTO_ID/1hxyzabc";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "Login, go to 'Orders' and you’ll see the status of your placed orders."
    },
    {
      question: "How do I cancel or return an item?",
      answer: "Visit 'My Orders', select the item and choose Cancel/Return within 7 days."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we use secure encryption and trusted payment gateways."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes! Use the live chat widget at the bottom-right corner anytime."
    }
  ];

  return (
    <div className="help-wrapper">
      <header className="help-header">
        <h1>Need Help? We're Here for You!</h1>
        <p>Explore FAQs, contact us, or start a live chat.</p>
      </header>

      <section className="faq-section">
        <h2>📌 Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className="faq-card" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{expanded === index ? '▲' : '▼'}</span>
            </div>
            <div className={`faq-answer ${expanded === index ? 'open' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </section>

      <section className="contact-form-section">
        <h2>📬 Contact Us</h2>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent! (Placeholder)'); }}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email Address" required />
          <textarea name="message" placeholder="Write your message here..." required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <div className="return-home">
        <button onClick={() => navigate('/')}>⬅ Return to Home</button>
      </div>

      <footer className="help-footer">
        <p>💙 Thank you for shopping with Cartify. Reach out any time!</p>
      </footer>
    </div>
  );
};

export default Help;
