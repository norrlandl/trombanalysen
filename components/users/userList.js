import styles from "./userList.module.scss";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

export default function UserList(props) {
  function deleteHandler(id) {
    props.onDeleteUser(id);
  }

  return (
    <div>
      <h2>All users</h2>
      <h4>Sort by name, role, date</h4>

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
              console.log(date);

              return (
                <tr key={id} className={styles.table__tbody_tr}>
                  <td className={styles.table__tbody_td}>
                    {firstName} {lastName}
                  </td>
                  <td
                    className={`${
                      role === "ADMIN"
                        ? styles.table__tbody_td_green
                        : styles.table__tbody_td_yellow
                    }`}
                  >
                    <span>{role}</span>
                  </td>
                  <td className={styles.table__tbody_td}>{company}</td>
                  <td className={styles.table__tbody_td}>{date}</td>
                  <td className={styles.table__tbody_td}>
                    <button
                      onClick={() => deleteHandler(id)}
                      className={styles.table__button}
                    >
                      <span className={styles.table__icon}>
                        <MdDeleteOutline />
                      </span>
                    </button>
                    <button
                      onClick={() =>
                        handleEdit(id, company, role, firstName, lastName)
                      }
                      className={styles.table__button}
                    >
                      {" "}
                      <span className={styles.table__icon}>
                        <MdOutlineEdit />
                      </span>
                    </button>
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
      {/* 
      {props.users.map(({ id, company, role, firstName, lastName }) => {
        return (
          <div key={id}>
            <h2>
              {firstName} {lastName}
            </h2>
            <h3>{company}</h3>
            <p>{role}</p>
            <button onClick={() => deleteHandler(id)}>Delete User</button>
            <button
              onClick={() => handleEdit(id, company, role, firstName, lastName)}
            >
              Edit User
            </button>
          </div>
        );
      })} */}
    </div>
  );
}
