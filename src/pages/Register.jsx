import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Registered Successfully!");
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <form style={styles.form} onSubmit={handleRegister}>
        <h2 style={styles.title}>Create Account</h2>

        <p style={styles.subtitle}>
          Register to access New Cape Hotel
        </p>

        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Register
        </button>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <span
            style={styles.link}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontFamily: "Arial, sans-serif",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
  },

  form: {
    position: "relative",
    width: "450px",
    background: "rgba(255,255,255,0.95)",
    padding: "40px",
    borderRadius: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
    zIndex: 1,
  },

  title: {
    textAlign: "center",
    margin: 0,
    fontSize: "38px",
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "10px",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "14px",
    background: "#d89b00",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "5px",
  },

  loginText: {
    textAlign: "center",
    color: "#555",
    marginTop: "10px",
  },

  link: {
    color: "#d89b00",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Register;