import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import NewUserForm from "./newUserForm";
import UserList from "@/components/users/userList";

export default function Users(props) {
  function addUserHandler(userData) {
    fetch("/api/post/create", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
  }

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
    // console.log(json);
    fetchData();
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
      <h1>Users CRUD with component</h1>
      <NewUserForm onAddUser={addUserHandler} />
      <h2>READ with component</h2>
      <UserList users={data} onDeleteUser={deleteUserHandler} />
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

// export async function getServerSideProps() {
//   const users = await prisma.user.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return {
//     props: {
//       users: JSON.parse(JSON.stringify(users)),
//     },
//   };
// }

// export default function Read({ users }) {
//   const deleteHandler = (e) => {
//     console.log(e.target);
//   };

//   return (
//     <div className="">
//       <ul>
//         {users.map((user) => (
//           <div key={user.id}>
//             <h2>
//               {user.firstName} {user.lastName}
//             </h2>
//             <h5>{user.company}</h5>
//             {/* <i>
//               <b>ID:{user.id}</b>
//             </i> */}
//             <p>{user.role}</p>

//             {/* <i>{user.createdAt}</i> */}

//             <Link href={`/users/${user.id}`}>{user.firstName}</Link>
//             {/* <button onClick={deleteHandler} testar={user.firstName}>
//               UPDATED
//             </button> */}

//             <p>-------</p>
//           </div>
//         ))}
//       </ul>

//       <div users={users}></div>

//       <h1 className={styles.heading_h1}>USERS</h1>
//       <form method="post" className={styles.login__form}>
//         <label htmlFor="company" className={styles.form__label}>
//           Company
//         </label>
//         <input type="text" className={styles.form__input} id="company"></input>

//         <label htmlFor="role" className={styles.form__label}>
//           Role
//         </label>
//         <select id="role" className={styles.form__input} name="Basic">
//           <option value="basic">BASIC</option>
//           <option value="admin">ADMIN</option>
//           <option value="reading">DEVELOPER</option>
//         </select>

//         <label htmlFor="firstname" className={styles.form__label}>
//           First name
//         </label>
//         <input
//           type="text"
//           className={styles.form__input}
//           id="firstname"
//         ></input>

//         <label htmlFor="lastname" className={styles.form__label}>
//           Last name
//         </label>
//         <input type="text" className={styles.form__input} id="lastname"></input>

//         <label htmlFor="email" className={styles.form__label}>
//           Email
//         </label>
//         <input type="email" className={styles.form__input} id="email"></input>

//         <label htmlFor="password" className={styles.form__label}>
//           Password
//         </label>
//         <input
//           type="password"
//           className={styles.form__input}
//           id="password"
//         ></input>

//         {/* <button onSubmit={submitHandler}></button> */}
//       </form>
//     </div>
//   );
// }
