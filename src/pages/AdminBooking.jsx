import { useEffect, useState } from "react";

function AdminBooking() {
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    const res = await fetch("http://localhost:5000/api/bookings");
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    getBookings();
  }, []);

  const cancelBooking = async (id) => {
    const reason = prompt("Enter cancellation reason:");
    if (!reason) return;

    const res = await fetch(`http://localhost:5000/api/bookings/${id}/cancel`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cancellationReason: reason }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Booking cancelled successfully");
      getBookings();
    }
  };

  const sortedBookings = [...bookings].sort((a, b) => {
    if (a.bookingStatus === "Cancelled" && b.bookingStatus !== "Cancelled") return 1;
    if (a.bookingStatus !== "Cancelled" && b.bookingStatus === "Cancelled") return -1;
    return 0;
  });

  const activeBookings = bookings.filter((b) => b.bookingStatus !== "Cancelled");
  const cancelledBookings = bookings.filter((b) => b.bookingStatus === "Cancelled");
  const totalAmount = activeBookings.reduce((sum, b) => sum + Number(b.paymentAmount || 0), 0);

  return (
    <>
      <style>{`
  .admin-booking-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f4f7fc, #eef3ff);
    padding-bottom: 70px;
  }

  .admin-hero {
    height: 42vh;
    background:
      linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)),
      url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600")
      center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
  }

  .admin-hero-content p {
    color: #f5c542;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: 12px;
  }

  .admin-hero-content h1 {
    font-size: 58px;
    margin: 0 0 12px;
  }

  .admin-hero-content span {
    font-size: 19px;
    color: #e5e5e5;
  }

  .admin-container {
    max-width: 1250px;
    margin: -55px auto 0;
    padding: 0 25px;
    position: relative;
    z-index: 3;
  }

  /* ── Summary Cards ── */
  .admin-summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 28px;
    margin-bottom: 55px;
  }

  .summary-card {
    background: rgba(255,255,255,0.92);
    padding: 32px 25px;
    border-radius: 28px;
    text-align: center;
    color: #222;
    box-shadow: 0 18px 45px rgba(0,0,0,0.16);
    border: 2px solid rgba(245,197,66,0.35);
    position: relative;
    overflow: hidden;
    transition: all 0.35s ease;
  }

  .summary-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #f5c542, #d89b00);
    opacity: 0;
    transition: 0.35s;
  }

  .summary-card:hover::before { opacity: 1; }

  .summary-card:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 28px 65px rgba(216,155,0,0.35);
  }

  .summary-card:hover h3,
  .summary-card:hover p,
  .summary-card:hover .summary-icon { color: white; }

  .summary-card:nth-child(1):hover::before { background: linear-gradient(135deg, #667eea, #764ba2); }
  .summary-card:nth-child(2):hover::before { background: linear-gradient(135deg, #11998e, #38ef7d); }
  .summary-card:nth-child(3):hover::before { background: linear-gradient(135deg, #ff416c, #ff4b2b); }
  .summary-card:nth-child(4):hover::before { background: linear-gradient(135deg, #f7971e, #ffd200); }

  .summary-icon {
    width: 62px;
    height: 62px;
    margin: 0 auto 16px;
    border-radius: 50%;
    background: #f5c542;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    position: relative;
    z-index: 2;
    transition: 0.35s;
  }

  .summary-card h3 {
    font-size: 38px;
    margin: 0 0 8px;
    color: #111827;
    position: relative;
    z-index: 2;
  }

  .summary-card p {
    font-weight: 700;
    margin: 0;
    color: #444;
    position: relative;
    z-index: 2;
  }

  .section-title {
    text-align: center;
    font-size: 42px;
    color: #1f2937;
    margin-bottom: 40px;
    font-weight: 700;
  }

  /* ── CONFIRMED booking card ── */
  .booking-card {
    background: linear-gradient(135deg, #f0fff7, #ffffff);
    border-radius: 25px;
    padding: 30px;
    margin-bottom: 30px;
    border: 4px solid #15803d;
    box-shadow: 0 15px 35px rgba(21, 128, 61, 0.2);
    transition: 0.3s ease;
  }

  .booking-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(21, 128, 61, 0.28);
  }

  /* ── CANCELLED booking card ── */
  .booking-card.cancelled {
    background: linear-gradient(135deg, #fff1f1, #ffffff);
    border: 4px solid #b91c1c;
    box-shadow: 0 15px 35px rgba(185, 28, 28, 0.2);
  }

  .booking-card.cancelled:hover {
    box-shadow: 0 25px 50px rgba(185, 28, 28, 0.28);
  }

  .booking-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
    margin-bottom: 25px;
    border-bottom: 2px solid #d1fae5;
    padding-bottom: 15px;
  }

  .booking-card.cancelled .booking-header {
    border-bottom: 2px solid #fecaca;
  }

  .guest-name {
    font-size: 30px;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  .booking-id {
    color: #6b7280;
    font-size: 14px;
    margin-top: 6px;
  }

  .status-badge {
    padding: 10px 22px;
    border-radius: 50px;
    color: white;
    font-weight: 700;
    font-size: 14px;
  }

  .status-confirmed {
    background: linear-gradient(135deg, #22c55e, #15803d);
    box-shadow: 0 6px 18px rgba(25,135,84,0.35);
  }

  .status-cancelled {
    background: linear-gradient(135deg, #ef4444, #b91c1c);
    box-shadow: 0 6px 18px rgba(220,53,69,0.35);
  }

  .details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
  }

  /* ── Info boxes: CONFIRMED (dark green border, big) ── */
  .booking-card .info-box {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    border: 3px solid #15803d;
    padding: 22px 20px;
    border-radius: 18px;
    box-shadow: 0 8px 22px rgba(21, 128, 61, 0.22);
    transition: all 0.3s ease;
    min-height: 90px;
  }

  .booking-card .info-box b {
    color: #065f46;
    font-size: 12px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 10px;
    font-weight: 800;
    letter-spacing: 0.5px;
  }

  .booking-card .info-box p {
    color: #064e3b;
    margin: 0;
    font-weight: 700;
    font-size: 15px;
    word-break: break-word;
  }

  .booking-card .info-box:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, #22c55e, #15803d);
    border-color: #052e16;
    box-shadow: 0 18px 35px rgba(21, 128, 61, 0.38);
  }

  .booking-card .info-box:hover b,
  .booking-card .info-box:hover p {
    color: white;
  }

  /* ── Info boxes: CANCELLED (dark red border, big) ── */
  .booking-card.cancelled .info-box {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    border: 3px solid #b91c1c;
    box-shadow: 0 8px 22px rgba(185, 28, 28, 0.22);
  }

  .booking-card.cancelled .info-box b {
    color: #7f1d1d;
  }

  .booking-card.cancelled .info-box p {
    color: #6b1a1a;
  }

  .booking-card.cancelled .info-box:hover {
    background: linear-gradient(135deg, #ef4444, #b91c1c);
    border-color: #450a0a;
    box-shadow: 0 18px 35px rgba(185, 28, 28, 0.38);
  }

  .booking-card.cancelled .info-box:hover b,
  .booking-card.cancelled .info-box:hover p {
    color: white;
  }

  /* ── Payment box: CONFIRMED ── */
  .payment-box {
    margin-top: 25px;
    background: linear-gradient(135deg, #dbeafe, #93c5fd);
    padding: 25px;
    border-radius: 20px;
    border: 3px solid #1d4ed8;
    box-shadow: 0 12px 25px rgba(59,130,246,0.25);
  }

  .payment-box h3 {
    color: #1d4ed8;
    margin: 0 0 20px;
    font-size: 24px;
  }

  /* ── Payment box: CANCELLED ── */
  .booking-card.cancelled .payment-box {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    border: 3px solid #b91c1c;
    box-shadow: 0 12px 25px rgba(185, 28, 28, 0.2);
  }

  .booking-card.cancelled .payment-box h3 {
    color: #b91c1c;
  }

  .message-box {
    margin-top: 20px;
    background: linear-gradient(135deg, #fff3cd, #ffe082);
    padding: 20px;
    border-radius: 15px;
    border: 2px solid #f59e0b;
    box-shadow: 0 10px 20px rgba(255,193,7,0.2);
  }

  .message-box b,
  .message-box strong { color: #8a5a00; }

  .message-box p {
    margin-bottom: 0;
    color: #444;
  }

  .cancel-reason {
    margin-top: 20px;
    background: #ffe5e5;
    color: #b91c1c;
    padding: 18px;
    border-radius: 15px;
    font-weight: 700;
    border-left: 6px solid #b91c1c;
  }

  .cancel-btn {
    margin-top: 25px;
    background: linear-gradient(135deg, #ef4444, #b91c1c);
    color: white;
    border: none;
    padding: 14px 30px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;
  }

  .cancel-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(239,68,68,0.35);
  }

  .empty-box {
    background: white;
    padding: 50px;
    border-radius: 20px;
    text-align: center;
    font-size: 20px;
    color: #666;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    .admin-hero-content h1 { font-size: 38px; }
    .admin-container { margin-top: -30px; padding: 0 18px; }
    .booking-header { flex-direction: column; align-items: flex-start; }
    .booking-card { padding: 22px; }
    .guest-name { font-size: 24px; }
    .section-title { font-size: 32px; }
  }
`}</style>

      <section className="admin-booking-page">
        <div className="admin-hero">
          <div className="admin-hero-content">
            <p>Luxury Hotel Admin Panel</p>
            <h1>Booking Dashboard</h1>
            <span>Confirmed bookings appear first and cancelled bookings stay below</span>
          </div>
        </div>

        <div className="admin-container">
          <div className="admin-summary">
            <div className="summary-card">
              <div className="summary-icon">📋</div>
              <h3>{bookings.length}</h3>
              <p>Total Bookings</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">✅</div>
              <h3>{activeBookings.length}</h3>
              <p>Active Bookings</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">❌</div>
              <h3>{cancelledBookings.length}</h3>
              <p>Cancelled Bookings</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">₹</div>
              <h3>₹{totalAmount}</h3>
              <p>Active Revenue</p>
            </div>
          </div>

          <h2 className="section-title">Saved Booking Details</h2>

          {sortedBookings.length === 0 ? (
            <div className="empty-box">No bookings found.</div>
          ) : (
            sortedBookings.map((booking) => (
              <div
                key={booking._id}
                className={booking.bookingStatus === "Cancelled" ? "booking-card cancelled" : "booking-card"}
              >
                <div className="booking-header">
                  <div>
                    <h2 className="guest-name">{booking.name}</h2>
                    <div className="booking-id">Booking ID: {booking._id}</div>
                  </div>
                  <span className={booking.bookingStatus === "Cancelled" ? "status-badge status-cancelled" : "status-badge status-confirmed"}>
                    {booking.bookingStatus || "Confirmed"}
                  </span>
                </div>

                <div className="details-grid">
                  <div className="info-box"><b>Phone</b><p>{booking.phone}</p></div>
                  <div className="info-box"><b>Email</b><p>{booking.email}</p></div>
                  <div className="info-box"><b>Check In</b><p>{booking.checkin}</p></div>
                  <div className="info-box"><b>Check Out</b><p>{booking.checkout}</p></div>
                  <div className="info-box"><b>Room Type</b><p>{booking.roomType}</p></div>
                  <div className="info-box"><b>Guests</b><p>{booking.guests}</p></div>
                </div>

                <div className="payment-box">
                  <h3>Payment Details</h3>
                  <div className="details-grid">
                    <div className="info-box"><b>Payment Method</b><p>{booking.paymentMethod || "N/A"}</p></div>
                    <div className="info-box"><b>Payment Amount</b><p>₹{booking.paymentAmount || "N/A"}</p></div>
                    <div className="info-box"><b>Payment Status</b><p>{booking.paymentStatus || "N/A"}</p></div>
                    <div className="info-box"><b>Transaction ID</b><p>{booking.transactionId || "N/A"}</p></div>
                  </div>
                </div>

                {booking.message && (
                  <div className="message-box">
                    <b>Customer Message:</b>
                    <p>{booking.message}</p>
                  </div>
                )}

                {booking.bookingStatus === "Cancelled" ? (
                  <div className="cancel-reason">
                    Cancellation Reason: {booking.cancellationReason || "No reason provided"}
                  </div>
                ) : (
                  <button className="cancel-btn" onClick={() => cancelBooking(booking._id)}>
                    Cancel Booking
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default AdminBooking;