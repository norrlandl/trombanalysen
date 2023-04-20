import styles from "./userList.module.scss";
import { MdDeleteOutline } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

export default function UserList(props) {
  function deleteHandler(id) {
    props.onDeleteUser(id);
  }

  return (
    <div>
      <div>
        <h4 className={styles.heading_h4}>All users</h4>
        <h5 className={styles.heading_h5}>Sort by name, role, date</h5>
      </div>

      <table className={styles.table}>
        <thead className={styles.table__thead}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Company</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className={styles.table__tbody}>
          {props.users.map(
            ({ id, company, role, firstName, lastName, createdAt }) => {
              const date = new Date(createdAt)
                .toISOString()
                .slice(0, 11)
                .replace("T", " ");

              return (
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
                  <td className={styles.table__tbody_td}>{date}</td>
                  <td className={styles.table__tbody_td}>
                    <button
                      onClick={() => deleteHandler(id)}
                      className={`${styles.table__button} ${styles.table__icon_delete}`}
                    >
                      <span className={`${styles.table__icon}`}>
                        <MdDeleteOutline />
                      </span>
                    </button>
                    <Link
                      href={`/admin/users/user/${id}`}
                      className={styles.table__link}
                      onDeleteUser={deleteHandler}
                    >
                      <span className={styles.table__icon}>
                        <FiMoreVertical />
                      </span>
                    </Link>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
        <tfoot className={styles.table__tfoot}>
          <tr>
            <td colSpan="6"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
