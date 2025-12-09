import React from "react";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("studentData"));

  return (
    <div style={{
      textAlign: "center",
      marginTop: "50px",
      padding: "30px",
      width: "450px",
      margin: "100px auto",
      background: "white",
      borderRadius: "15px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
    }}>
      
      <h1>Your Profile</h1>
      <hr style={{ margin: "15px 0" }} />

      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Phone:</strong> {user?.phone}</p>
      <p><strong>USN:</strong> {user?.usn}</p>
      <p><strong>Password:</strong> {user?.password}</p>

    </div>
  );
}
