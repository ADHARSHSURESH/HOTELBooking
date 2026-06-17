import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>New Cape Hotel</h2>

          <p>
            Experience comfort, luxury, and hospitality in the heart of
            Kanyakumari. We provide quality rooms and memorable stays.
          </p>

         <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <i className="fab fa-facebook-f"></i>
  </a>

  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <i className="fab fa-instagram"></i>
  </a>

  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <i className="fab fa-twitter"></i>
  </a>

  <a href="https://youtube.com" target="_blank" rel="noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
</div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><i className="fas fa-map-marker-alt"></i> Kanyakumari, Tamil Nadu</p>
          <p><i className="fas fa-phone"></i> +91 9876543210</p>
          <p><i className="fas fa-envelope"></i> newcapehotel@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Facilities</h3>
          <ul>
            <li>✔ Free WiFi</li>
            <li>✔ AC Rooms</li>
            <li>✔ Parking</li>
            <li>✔ Room Service</li>
            <li>✔ Family Rooms</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 New Cape Hotel. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;