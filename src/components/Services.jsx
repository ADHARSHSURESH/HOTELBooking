function Services() {
  const services = [
    {
      name: "Free WiFi",
      icon: "📶",
      image:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800",
      description:
        "Stay connected with high-speed internet available throughout the hotel.",
    },
    {
      name: "Parking",
      icon: "🚗",
      image:
        "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800",
      description:
        "Secure and spacious parking facilities available for all guests.",
    },
    {
      name: "Restaurant",
      icon: "🍽️",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      description:
        "Enjoy delicious food prepared by experienced chefs in a pleasant atmosphere.",
    },
    {
      name: "Room Service",
      icon: "🛎️",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      description:
        "24/7 room service to ensure a comfortable and relaxing stay.",
    },
      {
    name: "Pickup Service",
    icon: "🚐",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
    description:
      "Convenient airport and railway station pickup service for a hassle-free journey.",
  },
  {
    name: "Sightseeing Tours",
    icon: "🏝️",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    description:
      "Explore Kanyakumari's famous tourist attractions with our guided sightseeing services.",
  },

  ];

  return (
    <>
      <style>{`
        .services-page {
          background: #f8f5ef;
          min-height: 100vh;
        }

        .services-hero {
          height: 50vh;
          background: url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600')
            center/cover no-repeat;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .services-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.65);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
        }

        .hero-content p {
          color: #f5c542;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .hero-content h1 {
          font-size: 65px;
          margin: 10px 0;
        }

        .hero-content span {
          font-size: 22px;
        }

        .services-container {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 20px;
          text-align: center;
        }

        .services-container h2 {
          font-size: 42px;
          margin-bottom: 15px;
        }

        .services-container p.subtitle {
          color: #d89b00;
          font-weight: bold;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .service-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.12);
          transition: 0.4s;
        }

        .service-card:hover {
          transform: translateY(-10px);
        }

        .service-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s;
        }

        .service-card:hover img {
          transform: scale(1.1);
        }

        .service-icon {
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          background: #f5c542;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 28px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .service-content {
          padding: 40px 25px 25px;
        }

        .service-content h3 {
          margin-bottom: 15px;
          font-size: 24px;
          color: #222;
        }

        .service-content p {
          color: #666;
          line-height: 1.7;
        }

        @media(max-width:768px){
          .hero-content h1{
            font-size:42px;
          }

          .hero-content span{
            font-size:18px;
          }

          .services-container h2{
            font-size:32px;
          }
        }
      `}</style>

      <section className="services-page">
        <div className="services-hero">
          <div className="services-overlay"></div>

          <div className="hero-content">
            <p>Hotel Facilities</p>
            <h1>Our Services</h1>
            <span>Luxury, Comfort & Hospitality</span>
          </div>
        </div>

        <div className="services-container">
          <p className="subtitle">What We Offer</p>

          <h2>Premium Services For Our Guests</h2>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                  <div className="service-icon">{service.icon}</div>
                </div>

                <div className="service-content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;