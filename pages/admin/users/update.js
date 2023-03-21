import React from "react";

export default function Update() {
  const handleSubmit = async (e) => {};

  return (
    <div>
      <title>Update User</title>
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
      </div>
    </div>
  );
}
