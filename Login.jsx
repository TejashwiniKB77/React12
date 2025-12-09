import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedData = JSON.parse(localStorage.getItem("studentData"));

    if (!savedData) {
      alert("No user found! Please Signup first.");
      return;
    }

    if (savedData.email === email && savedData.password === password) {

    
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("role", savedData.role);

      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Incorrect email or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
