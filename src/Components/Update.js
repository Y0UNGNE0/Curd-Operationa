import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Update() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use Axios to make a PUT request to update the data
    axios
      .put(`https://65794a92f08799dc8046999d.mockapi.io/crud/${id}`, {
        name: name,
        email: email,
      })
      .then((response) => {
        console.log("Update successful:", response.data);

        // Handle any other actions after a successful update, if needed

        // Optionally, you can redirect the user or perform other actions
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <div>
      <h3 className="card-title">Update</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      
      {/* Link component for navigation */}
      <Link to="/read">Go to Read</Link>
    </div>
  );
}
