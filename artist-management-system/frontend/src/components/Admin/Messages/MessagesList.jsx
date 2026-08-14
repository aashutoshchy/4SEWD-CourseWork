import React, { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import { formatDate } from "../../../utils/formatDate";
import "./MessagesList.css";

const API_URL = import.meta.env.VITE_API_URL;

function MessagesList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("aurora_token");

  useEffect(() => {
    fetch(`${API_URL}/api/contact`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Do You really want to delete this message?",
    );
    if (!confirm) return;
    try {
      const res = await fetch(`${API_URL}/api/contact/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.message);
        return;
      }
      setMessages((prev) => prev.filter((message) => message._id !== id));
    } catch (error) {
      alert("Something went wrong deleting this message");
    }
  };

  return (
    <div className="messages-container">
      <div className="messages-header">
        <h1 className="messages-heading">Messages</h1>
      </div>
      {messages.length > 0 ? (
        <table className="messages-lists">
          <thead>
            <tr>
              <th>From</th>
              <th>Email</th>
              <th>Messages</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {loading ? (
            <Loading />
          ) : (
            <tbody>
              {messages.map((message) => (
                <tr key={message._id}>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td className="message-cell">{message.feedback}</td>
                  <td>{formatDate(message.createdAt)}</td>
                  <td>
                    <div className="action-icons">
                      <i className="fa-solid fa-eye"></i>
                      <i
                        onClick={() => handleDelete(message._id)}
                        className="fa-solid fa-trash"
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      ) : (
        <h4>No Messages yet!</h4>
      )}
    </div>
  );
}

export default MessagesList;
