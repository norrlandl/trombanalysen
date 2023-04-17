import styles from "./userList.module.scss";

export default function UserList(props) {
  function deleteHandler(id) {
    props.onDeleteUser(id);
  }
  return (
    <div>
      <h2>All users</h2>
      <h4>Sort by name, role, date</h4>

      <table className={styles.table}>
        <thead className={styles.table__headAndFoot}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Company</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(
            ({ id, company, role, firstName, lastName, createdAt }) => {
              const date = new Date(createdAt)
                .toISOString()
                .slice(0, 11)
                .replace("T", " ");
              console.log(date);

              return (
                <tr key={id}>
                  <td>
                    {firstName} {lastName}
                  </td>
                  <td>{role}</td>
                  <td>{company}</td>
                  <td>{date}</td>
                  <button onClick={() => deleteHandler(id)}>Delete User</button>
                  <button
                    onClick={() =>
                      handleEdit(id, company, role, firstName, lastName)
                    }
                  >
                    Edit User
                  </button>
                </tr>
              );
            }
          )}
        </tbody>
        <tfoot className={styles.table__headAndFoot}>
          <tr>
            <td colSpan="6"></td>
          </tr>
        </tfoot>
      </table>

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
      })}
    </div>
  );
}
