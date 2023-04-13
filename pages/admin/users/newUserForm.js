import { useRef } from "react";

export default function NewUserForm(props) {
  const companyInputRef = useRef();
  const roleInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredCompany = companyInputRef.current.value;
    const enteredRole = roleInputRef.current.value;
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;

    const userData = {
      company: enteredCompany,
      role: enteredRole,
      firstName: enteredFirstName,
      lastName: enteredLastName,
    };

    console.log(userData);
    props.onAddUser(userData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="company">Company</label>
        <input type="text" required id="company" ref={companyInputRef}></input>

        <label htmlFor="role">Role</label>
        <input type="text" required id="role" ref={roleInputRef}></input>

        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          required
          id="firstName"
          ref={firstNameInputRef}
        ></input>

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          required
          id="lastName"
          ref={lastNameInputRef}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
