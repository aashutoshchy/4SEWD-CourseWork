import React from "react";
import "./Dashboard.css";

const stats = [
  {
    icon: "fa-solid fa-users",
    label: "Artists",
    value: 3,
    sub: "Total Artists",
  },
  {
    icon: "fa-solid fa-compact-disc",
    label: "Albums",
    value: 124,
    sub: "Total Albums",
  },
  {
    icon: "fa-solid fa-newspaper",
    label: "Notices",
    value: 14,
    sub: "Total Notices",
  },
  {
    icon: "fa-solid fa-comments",
    label: "Messages",
    value: 14,
    sub: "Total Messages",
  },
];

const activities = [
  { text: 'You added a new artist "Aashutosh Chaudhary"', time: "2 hours ago" },
  { text: 'New message from "Na Hee Do"', time: "2 hours ago" },
  {
    text: 'You added a new release "Timro Naam Ke Chha Ra?" for Ashutosh',
    time: "2 hours ago",
  },
  {
    text: "Your Published a new notice",
    time: "2 hours ago",
    action: "Mark all as read",
  },
  {
    text: 'You added a new release "Chhor De (feat. r1m4n)" for Ashutosh',
    time: "2 hours ago",
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-topbar">
        <div className="admin-profile">
          <div className="admin-info">
            <p className="admin-name">Aashutosh</p>
            <p className="admin-role">Admin</p>
          </div>
          <div className="admin-avatar"></div>
        </div>
      </div>

      <h1 className="welcome-heading">Welcome back, Ashutosh!</h1>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-icon">
              <i className={stat.icon}></i>
            </div>
            <div className="stat-info">
              <span className="stat-label">{stat.label}</span>
              <h2 className="stat-value">{stat.value}</h2>
              <span className="stat-sub">{stat.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
