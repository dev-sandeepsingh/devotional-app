import { Navigate, Outlet } from "react-router-dom";
import { isAdmin } from "./session";

// Route guard: only an authenticated admin may reach the panel; everyone else is sent to login.
export default function RequireAdmin() {
  return isAdmin() ? <Outlet /> : <Navigate to="/adminLogin" replace />;
}
