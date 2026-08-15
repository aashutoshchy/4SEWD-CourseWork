import { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import { formatDate } from "../../../utils/formatDate";
import "./MessagesList.css";

const API_URL = import.meta.env.VITE_API_URL;

function MessagesList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);

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
    const confirmed = window.confirm(
      "Do you really want to delete this message?",
    );
    if (!confirmed) return;

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

  const handleView = (message) => {
    setSelectedMessage(message);
  };

  const closeModal = () => {
    setSelectedMessage(null);
  };

  // close modal on Escape key
  useEffect(() => {
    if (!selectedMessage) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedMessage]);

  if (loading) return <Loading />;

  return (
    <div className="messages-container">
      <div className="messages-header">
        <h1 className="messages-heading">Messages</h1>
      </div>

      {messages.length > 0 ? (
        <div className="messages-table-wrapper">
          <table className="messages-lists">
            <thead>
              <tr>
                <th>From</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message._id}>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td className="message-cell">{message.feedback}</td>
                  <td>{formatDate(message.createdAt)}</td>
                  <td>
                    <div className="action-icons">
                      <button
                        type="button"
                        className="message-action-btn"
                        onClick={() => handleView(message)}
                        aria-label={`View message from ${message.name}`}
                      >
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="message-action-btn"
                        onClick={() => handleDelete(message._id)}
                        aria-label={`Delete message from ${message.name}`}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h4>No Messages yet!</h4>
      )}

      {selectedMessage && (
        <div className="message-modal-overlay" onClick={closeModal}>
          <div
            className="message-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="message-modal-heading"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="message-modal-header">
              <h2 id="message-modal-heading">
                Message from {selectedMessage.name}
              </h2>
              <button
                type="button"
                className="message-modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="message-modal-meta">
              <div>
                <span className="message-modal-label">Email</span>
                <span className="message-modal-value">
                  {selectedMessage.email}
                </span>
              </div>
              {selectedMessage.contact && (
                <div>
                  <span className="message-modal-label">Contact</span>
                  <span className="message-modal-value">
                    {selectedMessage.contact}
                  </span>
                </div>
              )}
              <div>
                <span className="message-modal-label">Date</span>
                <span className="message-modal-value">
                  {formatDate(selectedMessage.createdAt)}
                </span>
              </div>
            </div>

            <p className="message-modal-body">{selectedMessage.feedback}</p>

            <div className="message-modal-actions">
              <button
                type="button"
                className="message-modal-btn message-modal-btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="message-modal-btn message-modal-btn-primary"
                onClick={() => {
                  handleDelete(selectedMessage._id);
                  closeModal();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessagesList;
