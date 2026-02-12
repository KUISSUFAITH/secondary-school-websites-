<<<<<<< HEAD
import React from "react";
=======
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
<<<<<<< HEAD
  if (!token) return <Navigate to="/login" replace />;
=======

  if (!token) {
    return <Navigate to="/login" replace />;
  }

>>>>>>> e325eda987966aeb53dded17298822d91643f81d
  return children;
}

export default ProtectedRoute;
