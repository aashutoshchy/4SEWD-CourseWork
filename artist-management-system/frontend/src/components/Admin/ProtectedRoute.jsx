import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("aurora_token");

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}

export default ProtectedRoute;
