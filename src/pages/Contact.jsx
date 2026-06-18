import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://hotelbooking-v5e4.onrender.com/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message saved successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Message not saved");
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <div className="contact-overlay"></div>

        <div className="contact-hero-content">
          <p>We Are Always Ready</p>
          <h1>Contact Us</h1>
          <span>Reach New Cape Hotel for bookings and support</span>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <p className="section-subtitle">Get In Touch</p>
          <h2>Need Help With Your Stay?</h2>

          <p className="contact-text">
            Feel free to contact New Cape Hotel for room booking,
            accommodation details, travel support, and local tour guidance.
          </p>

          <div className="info-grid">
            <div className="info-box">
              <div className="info-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>New Cape Hotel, Kanyakumari, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+91 9876543210</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>newcapehotel@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">⏰</div>
              <div>
                <h3>Support</h3>
                <p>Available 24/7 for guests</p>
              </div>
            </div>
          </div>

          <div className="map-box">
            <h3>Our Location</h3>

            <iframe
              title="New Cape Hotel Location"
              src="https://maps.google.com/maps?q=Kanyakumari&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="280"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send Message</h2>
          <p>Fill the form and we will contact you soon.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
