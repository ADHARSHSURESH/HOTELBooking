import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const getBookings = async () => {
    const res = await fetch("http://localhost:5000/api/bookings");
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/admin");
    } else {
      getBookings();
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin - Saved Bookings</h1>

      <button onClick={logout}>Logout</button>

      {bookings.map((booking) => (
        <div
          key={booking._id}
          style={{
            background: "white",
            padding: "20px",
            margin: "20px 0",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <p><b>Name:</b> {booking.name}</p>
          <p><b>Phone:</b> {booking.phone}</p>
          <p><b>Email:</b> {booking.email}</p>
          <p><b>Check In:</b> {booking.checkin}</p>
          <p><b>Check Out:</b> {booking.checkout}</p>
          <p><b>Room:</b> {booking.roomType}</p>
          <p><b>Guests:</b> {booking.guests}</p>
          <p><b>Message:</b> {booking.message}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;