import React, { useState, useEffect } from "react";
import { prisma } from "../../../prisma/client";
import { useRouter } from "next/router";

import styles from "./index.module.scss";
import NewUserForm from "./newUserForm";
import UserList from "@/components/users/userList";
import AdminLayout from "@/components/layout/adminLayout";

export default function Users({ userData }) {
  const router = useRouter();

  // const [users, setUsers] = useState(userData);

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

  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [inputedData, setInputedData] = useState({
    id: "",
    company: "",
    role: "",
    firstName: "",
    lastName: "",
  });

  const deleteUserHandler = async (id) => {
    console.log(id);
    const response = await fetch(`/api/post/delete`, {
      method: "DELETE",
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

  const handleEdit = async (id, company, role, firstName, lastName) => {
    console.log(id, company, role, firstName, lastName);
    setInputedData({ id, company, role, firstName, lastName });
    setEditMode(true);
  };

  const updateUserHandler = async () => {
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

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <AdminLayout>
      <div className={styles.content}>
        <h1 className={styles.heading_h1}>USERS</h1>
        <UserList
          users={userData}
          onDeleteUser={deleteUserHandler}
          onUpdateUser={updateUserHandler}
        />
        <NewUserForm onAddUser={addUserHandler} />
      </div>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const getUsers = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // const filePath = path.join(process.cwd(), "pages/api/post", "get.js");
  // const jsonData = await fs.readFile(filePath);
  // const data = JSON.parse(jsonData);

  return {
    props: {
      userData: JSON.parse(JSON.stringify(getUsers)),
    },
    // revalidate: 600,
  };
}

{
  /* <ButtonTertiary
link={`/admin/users/${id}`}
id={id}
company={company}
>
Details
</ButtonTertiary> */
}
