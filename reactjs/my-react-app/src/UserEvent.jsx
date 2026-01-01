import React, { useEffect, useState } from "react";
import "./Spinner.css";

function UserEvent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);


  if (loading) {
    return (
      <div className="center">
        <div className="spinner"></div>
        <p>Loading users...</p>
      </div>
    );
  }


  if (error) {
    return (
      <div className="center error">
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <div className="container">
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id} className="card">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserEvent;
