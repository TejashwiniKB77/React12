import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    usn: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (!form.name || !form.email || !form.phone || !form.usn || !form.password) {
      alert("All fields are required");
      return;
    }

    if (!form.email.includes("@")) {
      alert("Invalid email");
      return;
    }

    
    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

  
    localStorage.setItem("studentData", JSON.stringify(form));

    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Student Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <input
          type="text"
          name="usn"
          placeholder="USN"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">Signup</button>
      </form>

      <p
        onClick={() => navigate("/login")}
        style={{ cursor: "pointer", backgroundColor: "plum" }}
      >
        Already have an account? Login
      </p>
    </div>
  );
}

export default Signup;
