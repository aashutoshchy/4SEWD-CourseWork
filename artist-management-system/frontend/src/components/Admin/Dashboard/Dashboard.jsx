import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const API_URL = import.meta.env.VITE_API_URL;

function Dashboard() {
  const [counts, setCounts] = useState({
    artists: 0,
    releases: 0,
    notices: 0,
    messages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("aurora_token");

    Promise.all([
      fetch(`${API_URL}/api/artists`).then((res) => res.json()),
      fetch(`${API_URL}/api/releases`).then((res) => res.json()),
      fetch(`${API_URL}/api/notices`).then((res) => res.json()),
      fetch(`${API_URL}/api/contact`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => res.json()),
    ])
      .then(([artists, releases, notices, messages]) => {
        setCounts({
          artists: artists.length,
          releases: releases.length,
          notices: notices.length,
          messages: messages.length,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const stats = [
    {
      icon: "fa-solid fa-users",
      label: "Artists",
      value: counts.artists,
      sub: "Total Artists",
    },
    {
      icon: "fa-solid fa-compact-disc",
      label: "Releases",
      value: counts.releases,
      sub: "Total Releases",
    },
    {
      icon: "fa-solid fa-newspaper",
      label: "Notices",
      value: counts.notices,
      sub: "Total Notices",
    },
    {
      icon: "fa-solid fa-comments",
      label: "Messages",
      value: counts.messages,
      sub: "Total Messages",
    },
  ];

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
              <h2 className="stat-value">{loading ? "—" : stat.value}</h2>
              <span className="stat-sub">{stat.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
