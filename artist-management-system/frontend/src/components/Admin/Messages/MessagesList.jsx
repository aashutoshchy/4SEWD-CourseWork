import React, { useState } from "react";
import "./MessagesList.css";

function MessagesList() {
  const dummyMessages = [
    {
      id: 1,
      from: "Kim Taeri",
      subject: "Appreciating",
      message: "Hey I love your songs",
      date: "2026-10-15",
    },
    {
      id: 2,
      from: "Kim Taeri1",
      subject: "Appreciating",
      message: "Hey I love your songs",
      date: "2026-10-15",
    },
    {
      id: 3,
      from: "Kim Taeri2",
      subject: "Appreciating",
      message: "Hey I love your songs",
      date: "2026-10-15",
    },
    {
      id: 4,
      from: "Kim Taeri3",
      subject: "Appreciating",
      message: "Hey I love your songs",
      date: "2026-10-15",
    },
    {
      id: 5,
      from: "Kim Taeri4",
      subject: "Appreciating",
      message: "Hey I love your songs",
      date: "2026-10-15",
    },
  ];

  const [messages, setMessages] = useState(dummyMessages);

  const handleDelete = (id) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
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
              <th>Subject</th>
              <th>Messages</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id}>
                <td>{message.from}</td>
                <td>{message.subject}</td>
                <td>{message.message}</td>
                <td>{message.date}</td>
                <td>
                  <div className="action-icons">
                    <i className="fa-solid fa-eye"></i>
                    <i
                      onClick={() => handleDelete(message.id)}
                      className="fa-solid fa-trash"
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>No Messages yet!</h4>
      )}
    </div>
  );
}

export default MessagesList;
