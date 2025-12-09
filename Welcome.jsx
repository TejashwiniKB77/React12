import React from "react";

function Welcome() {
  const storedUser = JSON.parse(localStorage.getItem("studentData"));

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
      <h1>Welcome, {storedUser?.name} 🎉</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
}

export default Welcome;
