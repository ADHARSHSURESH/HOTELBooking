import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminLogin from "./pages/AdminLogin";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import AdminBooking from "./pages/AdminBooking";
import Footer from "./components/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />     
    </>
  );
}

function AdminRoute({ children }) {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />

        <Route path="/login" element={<AdminLogin />} />

        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/rooms" element={<Layout><Rooms /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        <Route path="/booking" element={<Layout><Booking /></Layout>} />

        <Route
          path="/adminbooking"
          element={
            <AdminRoute>
              <AdminBooking />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;