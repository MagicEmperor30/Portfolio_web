/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Navbar from "../Components/Navbar";
import "../Styles/common.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_APP_EMAILJS_USER_ID);

  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formData
      )
      .then((response) => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", company: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000); // Optional: Clear status after 3 seconds
      })
      .catch((error) => {
        console.error("EmailJS error:", error); // Log error for debugging
        setStatus("Failed to send the message. Please try again later.");
      });
  };

  return (
    <div className="contact-container">
      <Navbar />
      <h1>Contact</h1>
      <div className="line"></div>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
        {status && <div className="status-message">{status}</div>}
      </div>

      {/* GitHub and LinkedIn Links */}
      <div className="contact-links">
        <p>Connect with me on:</p>
        <ul>
          <li>
            <a
              href="https://github.com/magicemperor30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/digvijay-sasane-725163260"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
