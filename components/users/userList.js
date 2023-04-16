export default function UserList(props) {
  function deleteHandler(id) {
    props.onDeleteUser(id);
  }
  return (
    <div>
      <h3>USER LIST</h3>
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
