import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import "./AdminLayout.css";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
