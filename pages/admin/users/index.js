import React, { useState, useEffect } from "react";
import { prisma } from "../../../prisma/client";
import { useRouter } from "next/router";

import styles from "./index.module.scss";
import UserForm from "../../../components/users/user-form";
import UserList from "@/components/users/user-list";
import AdminLayout from "@/components/layout/adminLayout";
import UserFormNew from "@/components/users/user-form-2";

export default function Users({ userData, props }) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function createUserHandler(userData) {
    const response = await fetch("/api/user/create", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status < 300) {
      refreshData();
    }
  }

  async function deleteUserHandler(id) {
    console.log(id);
    const response = await fetch(`/api/user/delete`, {
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
  }

  return (
    <AdminLayout>
      <h1 className={styles.heading_h1}>USERS</h1>
      <UserList users={userData} onDeleteUser={deleteUserHandler} />
      <UserFormNew onCreateUser={createUserHandler} />
      {/* <UserForm onCreateUser={createUserHandler} /> */}
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const getUsers = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    props: {
      userData: JSON.parse(JSON.stringify(getUsers)),
    },
  };
}
