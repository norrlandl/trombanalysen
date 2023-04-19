import React, { useState, useEffect } from "react";
import { prisma } from "../../../prisma/client";
import { useRouter } from "next/router";

import styles from "./index.module.scss";
import NewUserForm from "./newUserForm";
import UserList from "@/components/users/userList";
import AdminLayout from "@/components/layout/adminLayout";

export default function Users({ users }) {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };
  // const [users, setUsers] = useState([]);

  async function addUserHandler(userData) {
    const response = await fetch("/api/post/create", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status < 300) {
      refreshData();
    }
  }

  // // *** WORKING ***
  // useEffect(() => {
  //   fetch(`/api/post/get`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //       console.log(data);
  //     });
  // }, []);

  // const [data, setData] = useState([]);
  // const [editMode, setEditMode] = useState(false);
  // const [inputedData, setInputedData] = useState({
  //   id: "",
  //   company: "",
  //   role: "",
  //   firstName: "",
  //   lastName: "",
  // });

  // const fetchData = async () => {
  //   const response = await fetch(`/api/post/get`);
  //   const json = await response.json();
  //   setUsers(json);
  // };

  // // const handleCreate = async (e) => {
  // //   e.preventDefault();
  // //   if (editMode) {
  // //     handleUpdate();
  // //   } else {
  // //     const response = await fetch(`/api/post/create`, {
  // //       method: "POST",
  // //       headers: { "Content-Type": "application/json" },
  // //       body: JSON.stringify({
  // //         company: inputedData.company,
  // //         role: inputedData.role,
  // //         firstName: inputedData.firstName,
  // //         lastName: inputedData.lastName,
  // //       }),
  // //     });
  // //     const json = await response.json();
  // //     // console.log(json);
  // //     setInputedData({
  // //       id: "",
  // //       company: "",
  // //       role: "",
  // //       firstName: "",
  // //       lastName: "",
  // //     });

  // //     fetchData();
  // //   }
  // // };

  const deleteUserHandler = async (id) => {
    console.log(id);
    const response = await fetch(`/api/post/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    });
    const json = await response.json();
    if (response.status < 300) {
      refreshData();
    }
  };

  // const handleDelete = async (id) => {
  //   console.log(id);
  //   const response = await fetch(`/api/post/delete`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       id,
  //     }),
  //   });
  //   const json = await response.json();
  //   // console.log(json);
  //   fetchData();
  // };

  // const handleEdit = async (id, company, role, firstName, lastName) => {
  //   console.log(id, company, role, firstName, lastName);
  //   setInputedData({ id, company, role, firstName, lastName });
  //   setEditMode(true);
  // };

  // const handleUpdate = async () => {
  //   const response = await fetch(`/api/post/update`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       id: inputedData.id,
  //       company: inputedData.company,
  //       role: inputedData.role,
  //       firstName: inputedData.firstName,
  //       lastName: inputedData.lastName,
  //     }),
  //   });
  //   const json = await response.json();
  //   console.log(json);
  //   setInputedData({
  //     id: "",
  //     company: "",
  //     role: "",
  //     firstName: "",
  //     lastName: "",
  //   });
  //   setEditMode(false);
  //   fetchData();
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const { admins } = props;

  return (
    <AdminLayout>
      <div className={styles.content}>
        <h1 className={styles.heading_h1}>USERS</h1>
        {/* {users.map((users) => (
        <li key={users.id}>{users.company}</li>
      ))} */}
        <UserList users={users} onDeleteUser={deleteUserHandler} />

        <NewUserForm onAddUser={addUserHandler} />
        {/* <h1>Users CRUD</h1>
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
        <select
          value={inputedData.role}
          type="text"
          placeholder="role"
          id="role"
          onChange={(e) =>
            setInputedData({ ...inputedData, role: e.target.value })
          }
        >
          <option value="BASIC">BASIC</option>
          <option value="ADMIN">ADMIN</option>
          <option value="DEVELOPER">DEVELOPER</option>
        </select>
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
              <h2>
                {firstName} {lastName}
              </h2>
              <h3>{company}</h3>
              <p>{role}</p>
              <button onClick={() => handleDelete(id)}>Delete User</button>
              <button
                onClick={() =>
                  handleEdit(id, company, role, firstName, lastName)
                }
              >
                Edit User
              </button>
              <ButtonTertiary
                link={`/admin/users/${id}`}
                id={id}
                company={company}
              >
                Details
              </ButtonTertiary>
            </div>
          );
        })}
      </div> */}
      </div>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // const filePath = path.join(process.cwd(), "pages/api/post", "get.js");
  // const jsonData = await fs.readFile(filePath);
  // const data = JSON.parse(jsonData);

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
    // revalidate: 600,
  };
}
