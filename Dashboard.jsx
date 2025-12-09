import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("studentData"));

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div style={{
      textAlign: "center",
      marginTop: "50px",
      padding: "40px",
      width: "450px",
      margin: "100px auto",
      background: "white",
      borderRadius: "15px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
    }}>
      <h1>Dashboard</h1>
      <h2>Welcome, {user?.name} 🎓</h2>

      <button 
        onClick={() => navigate("/profile")}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          background: "#2575fc",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Go to Profile
      </button>

      <br /><br />

      <button 
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          background: "#d9534f",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
}
