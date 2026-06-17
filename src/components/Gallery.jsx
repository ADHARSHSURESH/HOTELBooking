function Gallery() {
  const galleryImages = [
    {
      title: "AC Deluxe Room",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200",
    },
    {
      title: "Non AC Double Room",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    },
    {
      title: "Family Room",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
    },
    {
      title: "Luxury Bedroom",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200",
    },
    {
      title: "Hotel Reception",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200",
    },
    {
      title: "Restaurant Area",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
    },
  ];

  return (
    <>
      <style>{`
        .gallery-page {
          background: #f8f5ef;
          min-height: 100vh;
        }

        .gallery-hero {
          height: 50vh;
          background: url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600")
            center/cover no-repeat;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.65);
        }

        .gallery-hero-content {
          position: relative;
          z-index: 2;
          color: white;
        }

        .gallery-hero-content p {
          color: #f5c542;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-weight: bold;
        }

        .gallery-hero-content h1 {
          font-size: 65px;
          margin: 15px 0;
        }

        .gallery-hero-content span {
          font-size: 22px;
        }

        .gallery-container {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 20px;
          text-align: center;
        }

        .gallery-subtitle {
          color: #d89b00;
          font-weight: bold;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .gallery-container h2 {
          font-size: 42px;
          margin: 15px 0 40px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
          gap: 25px;
        }

        .gallery-card {
          position: relative;
          height: 320px;
          overflow: hidden;
          border-radius: 20px;
          cursor: pointer;
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s;
        }

        .gallery-card:hover img {
          transform: scale(1.1);
        }

        .gallery-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.1)
          );
          z-index: 1;
        }

        .gallery-info {
          position: absolute;
          bottom: 25px;
          left: 25px;
          color: white;
          z-index: 2;
          text-align: left;
        }

        .gallery-info h3 {
          font-size: 24px;
          margin: 0;
        }

        .gallery-info p {
          color: #f5c542;
          margin-top: 8px;
          font-size: 15px;
        }

        @media(max-width:768px){
          .gallery-hero-content h1{
            font-size:42px;
          }

          .gallery-hero-content span{
            font-size:18px;
          }

          .gallery-container h2{
            font-size:32px;
          }

          .gallery-card{
            height:280px;
          }
        }
      `}</style>

      <section className="gallery-page">
        <div className="gallery-hero">
          <div className="gallery-overlay"></div>

          <div className="gallery-hero-content">
            <p>New Cape Hotel</p>
            <h1>Gallery</h1>
            <span>Explore Our Rooms & Facilities</span>
          </div>
        </div>

        <div className="gallery-container">
          <p className="gallery-subtitle">Photo Collection</p>

          <h2>Discover Luxury & Comfort</h2>

          <div className="gallery-grid">
            {galleryImages.map((item, index) => (
              <div className="gallery-card" key={index}>
                <img src={item.image} alt={item.title} />

                <div className="gallery-info">
                  <h3>{item.title}</h3>
                  <p>New Cape Hotel</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;