import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-overlay"></div>
        <div className="about-hero-content">
          <p>Welcome to Kanyakumari</p>
          <h1>About New Cape Hotel</h1>
          <span>Your comfortable stay near the beauty of Kanyakumari</span>
        </div>
      </div>

      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200"
            alt="New Cape Hotel"
          />
        </div>

        <div className="about-content">
          <p className="section-subtitle">Who We Are</p>
          <h2>Experience Comfort, Care & Hospitality</h2>

          <p>
            New Cape Hotel offers comfortable accommodation, friendly service,
            and a peaceful stay for families, tourists, and business travelers.
            Located in Kanyakumari, our hotel provides easy access to nearby
            attractions, transport facilities, and local sightseeing places.
          </p>

          <p>
            We focus on clean rooms, guest satisfaction, affordable pricing,
            and a pleasant hospitality experience for every visitor.
          </p>

          <div className="about-highlights">
            <div>
              <h3>24/7</h3>
              <span>Guest Support</span>
            </div>
            <div>
              <h3>Clean</h3>
              <span>Rooms</span>
            </div>
            <div>
              <h3>Best</h3>
              <span>Location</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mission-vision">
        <div className="mv-card">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
            alt="Mission"
          />
          <div className="mv-content">
            <h3>Our Mission</h3>
            <p>
              To provide safe, clean, and comfortable rooms with excellent
              hospitality at affordable prices.
            </p>
          </div>
        </div>

        <div className="mv-card">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
            alt="Vision"
          />
          <div className="mv-content">
            <h3>Our Vision</h3>
            <p>
              To become one of the most trusted hotels in Kanyakumari by
              delivering quality service and memorable stays.
            </p>
          </div>
        </div>

        <div className="mv-card">
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"
            alt="Values"
          />
          <div className="mv-content">
            <h3>Our Values</h3>
            <p>
              We value cleanliness, honesty, guest comfort, quick service,
              safety, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;