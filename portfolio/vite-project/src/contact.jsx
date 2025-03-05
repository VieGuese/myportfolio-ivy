/*
File name: Contact.jsx
Student Name: Maria Ivy Guese
StudentID: 301393014
Date: January 29, 2025
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate();

  // Handler for form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/');
  };

  return (
    <>
      {/* Contact Information Panel */}
      <div className="contact-panel">
        <h1>Contact Information</h1>
        <p><b>Email: </b>ivymg@gmail.com</p>
        <p><b>Phone: </b>(437) 123-4567</p>
        <p><b>Address: </b>123 Cupid St., City of Love, CA</p>
      </div>

      {/* Contact Form Section */}
      <h3>We are happy to help! Send us your details.</h3>
      <form onSubmit={handleSubmit}>
        First Name: <input type="text" name="firstName" placeholder="Type First Name" value={formData.firstName} onChange={handleChange} required />
        <br/>Last Name: <input type="text" name="lastName" placeholder="Type Last Name" value={formData.lastName} onChange={handleChange} required />
        <br/>Contact Number: <input type="tel" name="contactNumber" placeholder="Type Contact Number" value={formData.contactNumber} onChange={handleChange} required />
        <br/>Email Address: <input type="email" name="email" placeholder="Type Email Address" value={formData.email} onChange={handleChange} required />
        <br/>Tell us your message:<br/> <textarea name="message" placeholder="Type Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <br/><button type="submit">Send Message</button>
      </form>
    </>
  );
}
