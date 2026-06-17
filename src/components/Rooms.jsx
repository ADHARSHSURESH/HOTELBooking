import "./Rooms.css";
import { useNavigate } from "react-router-dom";

const rooms = [
  {
    name: "Non AC Double",
    price: "₹999",
    value: "Non AC Room",
    amount: "999",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    features: ["2 Guests", "Free WiFi", "Clean Room"],
  },
    {
    name: "AC Room",
    price: "₹1999",
    value: "AC Room",
    amount: "1999",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    features: ["AC Room", "2 Guests", "Free WiFi", "Room Service"],
  },

  {
    name: "Deluxe AC Room",
    price: "₹1999",
    value: "Deluxe Room",
    amount: "1999",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200",
    features: ["AC Room", "Room Service", "Premium Bed"],
  },
  {
    name: "Non AC Deluxe Room",
    price: "₹1499",
    value: "Non AC Deluxe Room",
    amount: "1499",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200",
    features: ["Non AC", "Deluxe Bed", "Clean Room", "2 Guests"],
  },
  {
    name: "Family Room",
    price: "₹4500",
    value: "Family Room",
    amount: "4500",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
    features: ["Family Stay", "Large Space", "Best Comfort"],
  },
  {
    name: "Non AC Family Room",
    price: "₹2499",
    value: "Non AC Family Room",
    amount: "2499",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
    features: ["Family Stay", "Large Space", "4 Guests", "Best Comfort"],
  },
];

function Rooms() {
  const navigate = useNavigate();

  const handleBook = (room) => {
    navigate("/booking", {
      state: {
        roomType: room.value,
        paymentAmount: room.amount,
      },
    });
  };

  return (
    <section className="rooms-page">
      <div className="rooms-hero">
        <div className="rooms-overlay"></div>
        <div className="rooms-hero-content">
          <p>Comfort & Luxury</p>
          <h1>Our Rooms</h1>
          <span>Choose the perfect room for your stay in Kanyakumari</span>
        </div>
      </div>

      <div className="rooms-container">
        <p className="section-subtitle">Rooms & Suites</p>
        <h2>Comfortable Rooms for Every Guest</h2>

        <div className="room-grid">
          {rooms.map((room, index) => (
            <div className="room-card" key={index}>
              <div className="room-image">
                <img src={room.image} alt={room.name} />
                <span className="room-price">{room.price} / Night</span>
              </div>

              <div className="room-content">
                <h3>{room.name}</h3>

                <div className="room-features">
                  {room.features.map((feature, i) => (
                    <span key={i}>{feature}</span>
                  ))}
                </div>

                <button onClick={() => handleBook(room)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;