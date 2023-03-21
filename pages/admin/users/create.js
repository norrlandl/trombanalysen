import React, { useState, useEffect } from "react";
import Router from "next/router";

export default function Create() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = async ({ company, role }) => {

  //   const { data } = await fetch.post("/api/post", {
  //     company,
  //     role,
  //   });
  //   console.log(data);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const body = { company, role };
  //   await fetch(`/api/post`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(body),
  //   });
  //   console.log({ company, role });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (company && role) {
      // send a request to the server.
      try {
        const body = {
          // id,
          company,
          role,
          // firstName,
          // lastName,
          // email,
          // password,
          // createdAt,
          // updatedAt,
        };
        await fetch(`/api/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        await Router.push("/admin/users");
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("All fields are required");
      return;
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // setError("");
  //   // setMessage("");
  //   if (company && role) {
  //     // send a request to the server.
  //     try {
  //       const body = { company, role };
  //       await fetch(`/api/post`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(body),
  //       });
  //       console.log({ company, role });
  //       //await Router.push("/admin/users");
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   } else {
  //     setError("All fields are required");
  //     return;
  //   }
  // };

  return (
    <div>
      <title>Create User</title>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        {/* <form onSubmit={handleSubmit}>
          {error ? <div className=" error form-group">{error}</div> : null}
          {message ? <div className="message form-group">{message}</div> : null}
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit">Add Post</button>
          </div>
        </form> */}
      </div>
    </div>
  );
}
