const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* ================= DATABASE ================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

/* ================= ADMIN LOGIN ================= */

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.json({
      success: true,
      role: "admin",
    });
  }

  return res.json({
    success: false,
    message: "Invalid Admin Credentials",
  });
});
/* ================= BOOKINGS ================= */

const bookingSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    checkin: String,
    checkout: String,
    roomType: String,
    guests: String,
    message: String,

    paymentMethod: String,
    paymentAmount: String,
    transactionId: String,

    paymentStatus: {
      type: String,
      default: "Paid",
    },

    bookingStatus: {
      type: String,
      default: "Confirmed",
    },

    cancellationReason: String,
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

/* ================= SAVE BOOKING ================= */

app.post("/api/bookings", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    res.json({
      success: true,
      message: "Booking saved successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Booking not saved",
    });
  }
});

/* ================= GET BOOKINGS ================= */

app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Bookings not found",
    });
  }
});

/* ================= CANCEL BOOKING ================= */

app.put("/api/bookings/:id/cancel", async (req, res) => {
  try {
    const { cancellationReason } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        bookingStatus: "Cancelled",
        cancellationReason,
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "Booking cancelled successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Cancellation failed",
    });
  }
});

/* ================= CONTACTS ================= */

const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

/* ================= SAVE CONTACT ================= */

app.post("/api/contacts", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    res.json({
      success: true,
      message: "Message saved successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Message not saved",
    });
  }
});

/* ================= GET CONTACTS ================= */

app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Contacts not found",
    });
  }
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
