import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://hotelbooking-v5e4.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loginType: "admin",
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("role", "admin");
        localStorage.setItem("admin", "true");
        localStorage.removeItem("user");
        navigate("/home");
      } else {
        alert(data.message || "Invalid admin login");
      }
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      alert("Backend server not running or login API error");
    }
  };

  return (
    <>
      <style>{`
        .login-page {
          min-height: 100vh;
          background: url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600")
            center/cover no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 20px;
        }

        .login-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.78),
            rgba(0, 0, 0, 0.45)
          );
        }

        .login-card {
          position: relative;
          z-index: 2;
          width: 420px;
          max-width: 100%;
          background: rgba(255, 255, 255, 0.96);
          padding: 42px;
          border-radius: 26px;
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.35);
          animation: fadeUp 0.8s ease;
        }

        .login-logo {
          width: 78px;
          height: 78px;
          background: linear-gradient(135deg, #d89b00, #f5c542);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 18px;
          font-size: 34px;
          color: #222;
          box-shadow: 0 10px 25px rgba(216, 155, 0, 0.35);
        }

        .login-title {
          text-align: center;
          font-size: 34px;
          color: #222;
          margin: 0;
        }

        .login-subtitle {
          text-align: center;
          color: #666;
          margin: 10px 0 30px;
          line-height: 1.6;
        }

        .input-group {
          margin-bottom: 18px;
        }

        .input-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 700;
          color: #333;
        }

        .input-box {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f8f5ef;
          border: 1px solid #ddd;
          border-radius: 14px;
          padding: 0 15px;
          transition: 0.3s;
        }

        .input-box:focus-within {
          border-color: #d89b00;
          box-shadow: 0 0 0 4px rgba(216, 155, 0, 0.15);
          background: #fff;
        }

        .input-box span {
          font-size: 20px;
        }

        .input-box input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          padding: 16px 0;
          font-size: 16px;
          font-family: inherit;
        }

        .login-button {
          width: 100%;
          padding: 16px;
          margin-top: 10px;
          border: none;
          border-radius: 35px;
          background: linear-gradient(135deg, #d89b00, #f5c542);
          color: #222;
          font-size: 18px;
          font-weight: 800;
          cursor: pointer;
          transition: 0.3s;
        }

        .login-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(216, 155, 0, 0.4);
        }

        .login-footer-text {
          text-align: center;
          margin-top: 22px;
          color: #777;
          font-size: 14px;
        }

        .login-security {
          margin-top: 22px;
          background: #fff7df;
          color: #7a5700;
          padding: 13px;
          border-radius: 14px;
          text-align: center;
          font-size: 14px;
          font-weight: 600;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 500px) {
          .login-card {
            padding: 30px 22px;
          }

          .login-title {
            font-size: 28px;
          }
        }
      `}</style>

      <section className="login-page">
        <form className="login-card" onSubmit={handleLogin}>
          <div className="login-logo">🏨</div>

          <h2 className="login-title">Admin Login</h2>

          <p className="login-subtitle">
            Login to manage bookings, rooms, contacts, and hotel details.
          </p>

          <div className="input-group">
            <label>Username</label>
            <div className="input-box">
              <span>👤</span>
              <input
                name="username"
                placeholder="Enter admin username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-box">
              <span>🔒</span>
              <input
                name="password"
                type="password"
                placeholder="Enter admin password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-button">
            Login to Dashboard
          </button>

          <div className="login-security">
            Secure access only for hotel administrators
          </div>

          <p className="login-footer-text">
            © 2026 New Cape Hotel Admin Panel
          </p>
        </form>
      </section>
    </>
  );
}

export default AdminLogin;
