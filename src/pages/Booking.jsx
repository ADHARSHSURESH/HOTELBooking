import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const [showPayment, setShowPayment] = useState(false);

  const roomPrices = {
    "AC Room": "1999",
    "Non AC Room": "999",
    "AC Deluxe Room": "2499",
    "Non AC Deluxe Room": "1499",
    "AC Family Room": "4500",
    "Non AC Family Room": "2499",
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkin: "",
    checkout: "",
    roomType: "",
    guests: "",
    message: "",
    paymentAmount: "",
    paymentMethod: "",
    transactionId: "",
  });

  useEffect(() => {
    if (location.state) {
      setFormData((prev) => ({
        ...prev,
        roomType: location.state.roomType || "",
        paymentAmount: location.state.paymentAmount || "",
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "roomType") {
      setFormData({
        ...formData,
        roomType: value,
        paymentAmount: roomPrices[value] || "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const openPayment = (e) => {
    e.preventDefault();

    if (!formData.paymentAmount) {
      alert("Please select room or enter payment amount");
      return;
    }

    setShowPayment(true);
  };

  const confirmPayment = async () => {
    if (!formData.paymentMethod) {
      alert("Please select payment method");
      return;
    }

    const fakeTransactionId = "TXN" + Date.now();

    const res = await fetch("https://hotelbooking-v5e4.onrender.com/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        transactionId: fakeTransactionId,
        paymentStatus:
          formData.paymentMethod === "Cash at Hotel" ? "Pending" : "Paid",
        bookingStatus: "Confirmed",
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Booking confirmed successfully!");
      setShowPayment(false);

      setFormData({
        name: "",
        phone: "",
        email: "",
        checkin: "",
        checkout: "",
        roomType: "",
        guests: "",
        message: "",
        paymentAmount: "",
        paymentMethod: "",
        transactionId: "",
      });
    }
  };

  return (
    <>
      <style>{`
        .booking-page {
          min-height: 100vh;
          background: #f8f5ef;
          padding-bottom: 70px;
        }

        .booking-hero {
          height: 45vh;
          background: url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600")
            center/cover no-repeat;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
        }

        .booking-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
        }

        .booking-hero-content {
          position: relative;
          z-index: 2;
          padding: 20px;
        }

        .booking-hero-content p {
          color: #f5c542;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .booking-hero-content h1 {
          font-size: 60px;
          margin: 15px 0;
        }

        .booking-hero-content span {
          font-size: 20px;
        }

        .booking-container {
          max-width: 1150px;
          margin: -70px auto 0;
          padding: 0 25px;
          position: relative;
          z-index: 5;
        }

        .booking-card {
          background: white;
          border-radius: 28px;
          padding: 40px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.18);
        }

        .booking-title {
          text-align: center;
          margin-bottom: 35px;
        }

        .booking-title p {
          color: #d89b00;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .booking-title h2 {
          font-size: 38px;
          color: #222;
          margin: 0;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full {
          grid-column: span 2;
        }

        .form-group label {
          font-weight: 700;
          margin-bottom: 8px;
          color: #333;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 15px 16px;
          border: 1px solid #ddd;
          border-radius: 14px;
          font-size: 16px;
          outline: none;
          font-family: inherit;
          box-sizing: border-box;
          transition: 0.3s;
          background: #fff;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #d89b00;
          box-shadow: 0 0 0 4px rgba(216, 155, 0, 0.16);
        }

        .form-group textarea {
          resize: none;
        }

        .amount-box {
          background: #fff7df !important;
          color: #222;
          font-weight: 700;
        }

        .submit-btn {
          width: 100%;
          margin-top: 30px;
          padding: 17px;
          border: none;
          border-radius: 35px;
          background: linear-gradient(135deg, #d89b00, #f5c542);
          color: #222;
          font-size: 19px;
          font-weight: 800;
          cursor: pointer;
          transition: 0.3s;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(216, 155, 0, 0.35);
        }

        .booking-note {
          margin-top: 25px;
          background: #f8f5ef;
          padding: 18px;
          border-radius: 16px;
          color: #555;
          line-height: 1.7;
          text-align: center;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          padding: 20px;
        }

        .payment-box {
          width: 520px;
          max-width: 100%;
          background: white;
          padding: 35px;
          border-radius: 28px;
          box-shadow: 0 25px 70px rgba(0,0,0,0.35);
          animation: popup 0.3s ease;
        }

        .payment-box h2 {
          color: #d89b00;
          margin-bottom: 10px;
          font-size: 30px;
          text-align: center;
        }

        .amount-text {
          background: #f8f5ef;
          padding: 16px;
          border-radius: 14px;
          font-size: 22px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 24px;
        }

        .payment-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px;
          border: 1px solid #ddd;
          margin-bottom: 12px;
          border-radius: 14px;
          cursor: pointer;
          font-size: 17px;
          transition: 0.3s;
        }

        .payment-option:hover {
          border-color: #d89b00;
          background: #fff7df;
        }

        .payment-option input {
          width: 18px;
          height: 18px;
        }

        .pay-btn {
          width: 100%;
          padding: 15px;
          background: #198754;
          color: white;
          border: none;
          font-size: 18px;
          font-weight: 800;
          border-radius: 30px;
          cursor: pointer;
          margin-top: 15px;
          transition: 0.3s;
        }

        .pay-btn:hover {
          background: #146c43;
          transform: translateY(-3px);
        }

        .close-btn {
          width: 100%;
          padding: 13px;
          background: #6c757d;
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          margin-top: 10px;
          font-weight: 700;
        }

        @keyframes popup {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .booking-hero-content h1 {
            font-size: 40px;
          }

          .booking-container {
            margin-top: -40px;
          }

          .booking-card {
            padding: 25px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-group.full {
            grid-column: span 1;
          }

          .booking-title h2 {
            font-size: 30px;
          }
        }
      `}</style>

      <section className="booking-page">
        <div className="booking-hero">
          <div className="booking-hero-content">
            <p>New Cape Hotel</p>
            <h1>Book Your Stay</h1>
            <span>Reserve your comfortable room in Kanyakumari</span>
          </div>
        </div>

        <div className="booking-container">
          <form className="booking-card" onSubmit={openPayment}>
            <div className="booking-title">
              <p>Room Reservation</p>
              <h2>Booking Form</h2>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Guests</label>
                <input
                  type="number"
                  name="guests"
                  placeholder="Number of guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Check In</label>
                <input
                  type="date"
                  name="checkin"
                  value={formData.checkin}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Check Out</label>
                <input
                  type="date"
                  name="checkout"
                  value={formData.checkout}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Room Type</label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Room</option>
                  <option value="AC Room">AC Room</option>
                  <option value="Non AC Room">Non AC Room</option>
                  <option value="AC Deluxe Room">AC Deluxe Room</option>
                  <option value="Non AC Deluxe Room">Non AC Deluxe Room</option>
                  <option value="AC Family Room">AC Family Room</option>
                  <option value="Non AC Family Room">Non AC Family Room</option>
                </select>
              </div>

              <div className="form-group">
                <label>Payment Amount</label>
                <input
                  className="amount-box"
                  type="number"
                  name="paymentAmount"
                  placeholder="Payment Amount"
                  value={formData.paymentAmount}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full">
                <label>Message</label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Any special request?"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <button className="submit-btn" type="submit">
              Pay Now & Submit Booking
            </button>

            <div className="booking-note">
              Your booking will be confirmed after payment selection. For Cash at
              Hotel, payment status will be shown as Pending.
            </div>
          </form>
        </div>

        {showPayment && (
          <div className="modal-overlay">
            <div className="payment-box">
              <h2>Choose Payment Method</h2>

              <p className="amount-text">
                Amount to Pay: ₹{formData.paymentAmount}
              </p>

              {[
                "UPI / Google Pay / PhonePe",
                "Credit Card",
                "Debit Card",
                "Net Banking",
                "Cash at Hotel",
              ].map((method, index) => (
                <label className="payment-option" key={index}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    onChange={handleChange}
                  />
                  {method}
                </label>
              ))}

              <button className="pay-btn" type="button" onClick={confirmPayment}>
                Confirm Booking
              </button>

              <button
                className="close-btn"
                type="button"
                onClick={() => setShowPayment(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Booking;
