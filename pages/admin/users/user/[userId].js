import { ButtonPrimary } from "@/components/ui/buttons";
import { MdDeleteOutline } from "react-icons/md";
import { prisma } from "../../../../prisma/client";
import styles from "./userId.module.scss";
import AdminLayout from "@/components/layout/adminLayout";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function UserDetails({ user, props }) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const { id, firstName, lastName, email, password, createdAt, company, role } =
    user;

  const date = new Date(createdAt).toISOString().slice(0, 11).replace("T", " ");

  // function deleteHandler(id) {
  //   console.log(id);
  //   props.onDeleteUser(id);
  // }

  const form = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/user/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        firstName: form.current.firstName.value,
        lastName: form.current.lastName.value,
        email: form.current.email.value,
        password: form.current.password.value,
        company: form.current.company.value,
        role: form.current.role.value,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (response.status < 300) {
      refreshData();
    }
    form.current.reset();
  };

  return (
    <AdminLayout>
      <div>
        <h1 className={styles.heading_h1}>
          {" "}
          {firstName} {lastName}
        </h1>

        <div>
          <h4 className={styles.heading_h4}>{company}</h4>
          <h5 className={styles.heading_h5}>Handle the user</h5>
        </div>

        <table className={styles.table}>
          <thead className={styles.table__thead}>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Company</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className={styles.table__tbody}>
            <tr key={id} className={styles.table__tbody_tr}>
              <td className={styles.table__tbody_td}>
                {firstName} {lastName}
              </td>
              <td
                className={`${
                  role === "ADMIN"
                    ? styles.table__tbody_td_green
                    : role === "DEVELOPER"
                    ? styles.table__tbody_td_yellow
                    : styles.table__tbody_td_blue
                }`}
              >
                <span>{role}</span>
              </td>
              <td className={styles.table__tbody_td}>{company}</td>
              <td className={styles.table__tbody_td}>{email}</td>
              <td className={styles.table__tbody_td}>{date}</td>
              <td className={styles.table__tbody_td}>
                <button
                  // onClick={() => deleteHandler(id)}
                  className={`${styles.table__button} ${styles.table__icon_delete}`}
                >
                  <span className={styles.table__icon}>
                    <MdDeleteOutline />
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot className={styles.table__tfoot}>
            <tr>
              <td colSpan="6"></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div>
        <h4 className={styles.heading_h4}>Update user</h4>
        <h5 className={styles.heading_h5}>Handle the user</h5>
      </div>

      <form onSubmit={submitHandler} ref={form} className={styles.form}>
        <div className={styles.form__section}>
          <label htmlFor="firstName" className={styles.form__label}>
            First name
          </label>
          <input
            type="text"
            required
            id="firstName"
            defaultValue={firstName}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="lastName" className={styles.form__label}>
            Last name
          </label>
          <input
            type="text"
            required
            id="lastName"
            defaultValue={lastName}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="email" className={styles.form__label}>
            Email
          </label>
          <input
            type="email"
            required
            id="email"
            defaultValue={email}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="password" className={styles.form__label}>
            Password
          </label>
          <input
            type="password"
            required
            id="password"
            defaultValue={password}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="company" className={styles.form__label}>
            Company
          </label>
          <input
            type="text"
            required
            id="company"
            defaultValue={company}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="role" className={styles.form__label}>
            Role
          </label>
          <select
            type="text"
            required
            id="role"
            defaultValue={role}
            className={`${styles.form__input} ${styles.form__input__select}`}
          >
            {" "}
            <option value="BASIC">BASIC</option>
            <option value="ADMIN">ADMIN</option>
            <option value="DEVELOPER">DEVELOPER</option>
          </select>
        </div>

        <div className={styles.form__section_button}>
          <ButtonPrimary type="submit">Update</ButtonPrimary>
        </div>
      </form>
    </AdminLayout>
  );
}

export async function getServerSideProps(context) {
  const { userId } = context.query;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
