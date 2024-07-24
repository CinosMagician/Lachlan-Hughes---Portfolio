import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrors({ email: 'Invalid email address' });
      return;
    }

    setErrors({ email: '' });

    // Send email using EmailJS
    emailjs.send(
    'service_ibi5d5q',
    'template_ry1fhrv',
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    '72iuHhNaIaZI3AnTa'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
    }, (error) => {
      console.log('FAILED...', error);
      alert('Failed to send email. Please try again later.');
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mt-5 contact">
      <h2>Contact Form:</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5" // Make the message box bigger
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-danger">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;