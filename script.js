import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       company: "Tromb",
//       role: "Basic",
//       firstName: "Elvira",
//       lastName: "Öberg",
//     },
//   });
//   console.log(user);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

/*


***** WORKING CRUD CODE *****

import React, { useState, useEffect } from "react";
import NewUserForm from "./newUserForm";
import UserList from "@/components/users/userList";

export default function Users() {
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [inputedData, setInputedData] = useState({
    id: "",
    company: "",
    role: "",
    firstName: "",
    lastName: "",
  });

  // console.log(inputedData);

  const fetchData = async () => {
    const response = await fetch(`/api/post/get`);
    const json = await response.json();
    setData(json);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (editMode) {
      handleUpdate();
    } else {
      const response = await fetch(`/api/post/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: inputedData.company,
          role: inputedData.role,
          firstName: inputedData.firstName,
          lastName: inputedData.lastName,
        }),
      });
      const json = await response.json();
      // console.log(json);
      setInputedData({
        id: "",
        company: "",
        role: "",
        firstName: "",
        lastName: "",
      });

      fetchData();
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    const response = await fetch(`/api/post/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    });
    const json = await response.json();
    // console.log(json);
    fetchData();
  };

  const handleEdit = async (id, company, role, firstName, lastName) => {
    console.log(id, company, role, firstName, lastName);
    setInputedData({ id, company, role, firstName, lastName });
    setEditMode(true);
  };

  const handleUpdate = async () => {
    const response = await fetch(`/api/post/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: inputedData.id,
        company: inputedData.company,
        role: inputedData.role,
        firstName: inputedData.firstName,
        lastName: inputedData.lastName,
      }),
    });
    const json = await response.json();
    console.log(json);
    setInputedData({
      id: "",
      company: "",
      role: "",
      firstName: "",
      lastName: "",
    });
    setEditMode(false);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Users CRUD</h1>
      <h2>CREATE</h2>
      <form onSubmit={handleCreate}>
        <input
          value={inputedData.company}
          type="text"
          placeholder="company"
          id="company"
          onChange={(e) =>
            setInputedData({ ...inputedData, company: e.target.value })
          }
        ></input>
        <input
          value={inputedData.role}
          type="text"
          placeholder="role"
          id="role"
          onChange={(e) =>
            setInputedData({ ...inputedData, role: e.target.value })
          }
        ></input>
        <input
          value={inputedData.firstName}
          type="text"
          placeholder="first name"
          id="firstName"
          onChange={(e) =>
            setInputedData({ ...inputedData, firstName: e.target.value })
          }
        ></input>
        <input
          value={inputedData.lastName}
          type="text"
          placeholder="last name"
          id="lastName"
          onChange={(e) =>
            setInputedData({ ...inputedData, lastName: e.target.value })
          }
        ></input>
        <button type="submit">Submit</button>
      </form>
      <h2>READ</h2>
      <div>
        {data.map(({ id, company, role, firstName, lastName }) => {
          return (
            <div key={id}>
              <h2>{firstName}</h2>
              <h3>{company}</h3>
              <button onClick={() => handleDelete(id)}>Delete User</button>
              <button
                onClick={() =>
                  handleEdit(id, company, role, firstName, lastName)
                }
              >
                Edit User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}




***** PRISMA *****

CRUD: https://www.youtube.com/watch?v=jvXct3Ud18k

https://www.youtube.com/watch?v=L5JU1oR29TM

https://www.youtube.com/watch?v=aim8Mk-ETK0

https://www.noahbieler.com/blog/a-crud-web-app-using-nextjs-13-iron-session-and-prisma

https://nextdev1111.hashnode.dev/crud-functions-using-prisma-nextjs-and-supabasepostgress-database#heading-update-function

https://daily-dev-tips.com/posts/prisma-creating-a-upvotes-one-to-many-relation/


***** SASS *****
https://www.codeconcisely.com/posts/how-to-use-scss-with-css-modules-in-nextjs/


*/
