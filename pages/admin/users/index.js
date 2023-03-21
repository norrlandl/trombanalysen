import React, { useState } from "react";

import styles from "./index.module.scss";
import prisma from "../../../lib/prisma";

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}

export default function Read({ users }) {
  // const submitHandler = async () => {
  //   const { data } = await fetch.user();
  // };

  return (
    <div className="">
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.company}</p>
            <i>
              <b>ID:{user.id}</b>
            </i>
            <h2>{user.role}</h2>
            <h3>{user.firstName}</h3>
            <h4>{user.lastName}</h4>
            <i>{user.createdAt}</i>
          </div>
        ))}
      </ul>

      <div users={users}></div>

      <h1 className={styles.heading_h1}>USERS</h1>
      <form method="post" className={styles.login__form}>
        <label htmlFor="company" className={styles.form__label}>
          Company
        </label>
        <input type="text" className={styles.form__input} id="company"></input>

        <label htmlFor="role" className={styles.form__label}>
          Role
        </label>
        <select id="role" className={styles.form__input} name="Basic">
          <option value="basic">BASIC</option>
          <option value="admin">ADMIN</option>
          <option value="reading">DEVELOPER</option>
        </select>

        <label htmlFor="firstname" className={styles.form__label}>
          First name
        </label>
        <input
          type="text"
          className={styles.form__input}
          id="firstname"
        ></input>

        <label htmlFor="lastname" className={styles.form__label}>
          Last name
        </label>
        <input type="text" className={styles.form__input} id="lastname"></input>

        <label htmlFor="email" className={styles.form__label}>
          Email
        </label>
        <input type="email" className={styles.form__input} id="email"></input>

        <label htmlFor="password" className={styles.form__label}>
          Password
        </label>
        <input
          type="password"
          className={styles.form__input}
          id="password"
        ></input>

        {/* <button onSubmit={submitHandler}></button> */}
      </form>
    </div>
  );
}
