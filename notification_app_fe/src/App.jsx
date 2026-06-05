import { useState } from "react";
import "./App.css";

function App() {
  const notifications = [
    {
      ID: "1",
      Type: "Placement",
      Message: "Alphabet Inc. Class C hiring",
      Timestamp: "2026-06-04 19:56:01",
    },
    {
      ID: "2",
      Type: "Result",
      Message: "mid-sem",
      Timestamp: "2026-06-05 04:25:46",
    },
    {
      ID: "3",
      Type: "Event",
      Message: "farewell",
      Timestamp: "2026-06-04 08:26:16",
    },
    {
      ID: "4",
      Type: "Placement",
      Message: "Tesla hiring",
      Timestamp: "2026-06-04 04:54:31",
    },
    {
      ID: "5",
      Type: "Event",
      Message: "tech-fest",
      Timestamp: "2026-06-04 18:23:01",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  const itemsPerPage = 2;

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.Type === filter);

  const startIndex = (page - 1) * itemsPerPage;

  const paginatedNotifications = filteredNotifications.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(
    filteredNotifications.length / itemsPerPage
  );

  return (
    <div className="container">
      <h1>Top Notifications Dashboard</h1>

      <p>Total Notifications: {filteredNotifications.length}</p>

      <select
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setPage(1);
        }}
      >
        <option>All</option>
        <option>Placement</option>
        <option>Result</option>
        <option>Event</option>
      </select>

      {paginatedNotifications.map((item) => (
        <div key={item.ID} className="card">
          <h3>{item.Type}</h3>
          <p>{item.Message}</p>
          <small>{item.Timestamp}</small>
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <span style={{ margin: "10px" }}>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;