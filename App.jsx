import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Welcome from "./Welcome";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import React, { Suspense, lazy } from "react";

// Lazy Loading for Profile
const Profile = lazy(() => import("./Profile"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />

      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Lazy Loaded Protected Profile Route */}
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Suspense fallback={<p style={{ textAlign: "center" }}>Loading Profile...</p>}>
              <Profile />
            </Suspense>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;
