import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .home {
          min-height: 100vh;
          background: url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600")
            center center/cover no-repeat;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .home-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
        }

        .home-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          padding: 20px;
          color: white;
          animation: fadeIn 1s ease-in-out;
        }

        .home-subtitle {
          color: #f5c542;
          font-size: 22px;
          letter-spacing: 4px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .home-title {
          font-size: 75px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 25px;
        }

        .home-title span {
          color: #f5c542;
        }

        .home-description {
          font-size: 24px;
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .home-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 50px;
        }

        .btn-primary,
        .btn-secondary {
          padding: 15px 35px;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #f5c542;
          color: #222;
          border: none;
        }

        .btn-primary:hover {
          background: #d89b00;
          transform: translateY(-3px);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #222;
          transform: translateY(-3px);
        }

        .home-features {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 20px 30px;
          min-width: 180px;
          transition: 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.22);
        }

        .feature-card h3 {
          color: #f5c542;
          font-size: 30px;
          margin-bottom: 10px;
        }

        .feature-card p {
          margin: 0;
          font-size: 16px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .home-title {
            font-size: 45px;
          }

          .home-description {
            font-size: 18px;
          }

          .home-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 220px;
          }

          .feature-card {
            width: 100%;
            max-width: 250px;
          }
        }
          .hotel-showcase {
  padding: 90px 8%;
  background: #f8f5ef;
}

.showcase-container {
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.showcase-image img {
  width: 100%;
  border-radius: 25px;
  box-shadow: 0 20px 45px rgba(0,0,0,0.15);
}

.showcase-subtitle {
  color: #d89b00;
  letter-spacing: 3px;
  font-weight: bold;
  margin-bottom: 15px;
}

.showcase-content h2 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #222;
}

.showcase-content h2 span {
  color: #d89b00;
}

.showcase-content p {
  font-size: 18px;
  color: #666;
  line-height: 1.8;
}

.showcase-features {
  display: flex;
  gap: 40px;
  margin: 35px 0;
}

.showcase-features h3 {
  color: #d89b00;
  font-size: 34px;
  margin-bottom: 5px;
}

.showcase-features p {
  margin: 0;
  font-size: 15px;
}

.showcase-btn {
  background: #d89b00;
  color: white;
  border: none;
  padding: 15px 35px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
  transition: 0.3s;
}

.showcase-btn:hover {
  background: #b67f00;
  transform: translateY(-3px);
}

@media(max-width: 900px) {
  .showcase-container {
    grid-template-columns: 1fr;
  }

  .showcase-content {
    text-align: center;
  }

  .showcase-features {
    justify-content: center;
  }

  .showcase-content h2 {
    font-size: 36px;
  }
}
      `}
    </style>

      <div className="home">
        <div className="home-overlay"></div>

        <div className="home-content">
          <p className="home-subtitle">
            WELCOME TO NEW CAPE HOTEL
          </p>

          <h1 className="home-title">
            Luxury Stay in
            <br />
            <span>Kanyakumari</span>
          </h1>

          <p className="home-description">
            Experience comfort, elegance, and exceptional hospitality.
            Stay near the beach, railway station, and major tourist
            attractions with modern amenities and premium service.
          </p>

          <div className="home-buttons">
            <button
              className="btn-primary"
              onClick={() => navigate("/booking")}
            >
              Book Now
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("/about")}
            >
              Explore Hotel
            </button>
          </div>

          <div className="home-features">
            <div className="feature-card">
              <h3>24/7</h3>
              <p>Room Service</p>
            </div>

            <div className="feature-card">
              <h3>Free</h3>
              <p>WiFi</p>
            </div>

            <div className="feature-card">
              <h3>AC</h3>
              <p>Premium Rooms</p>
            </div>

            <div className="feature-card">
              <h3>Near</h3>
              <p>Tourist Spots</p>
            </div>
          </div>
        </div>
      </div>

<section className="hotel-showcase">
  <div className="showcase-container">
    <div className="showcase-image">
      <img
        src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200"
        alt="Hotel Room"
      />
    </div>

    <div className="showcase-content">
      <p className="showcase-subtitle">ABOUT OUR HOTEL</p>

      <h2>
        Enjoy A Luxury Experience
        <span> In Kanyakumari</span>
      </h2>

      <p>
        New Cape Hotel offers elegant rooms, modern facilities,
        exceptional hospitality, and easy access to beaches,
        railway stations, and tourist attractions.
      </p>

      <div className="showcase-features">
        <div>
          <h3>50+</h3>
          <p>Luxury Rooms</p>
        </div>

        <div>
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>

        <div>
          <h3>98%</h3>
          <p>Guest Satisfaction</p>
        </div>
      </div>

      <button
        className="showcase-btn"
        onClick={() => navigate("/rooms")}
      >
        View Rooms
      </button>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;