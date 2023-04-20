import { useRef } from "react";
import styles from "./userForm.module.scss";
import { ButtonPrimary } from "@/components/ui/buttons";

export default function UserForm(props) {
  const firstNameInputRef = useRef("");
  const lastNameInputRef = useRef("");
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const companyInputRef = useRef("");
  const roleInputRef = useRef("");

  const form = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredCompany = companyInputRef.current.value;
    const enteredRole = roleInputRef.current.value;

    const userData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
      company: enteredCompany,
      role: enteredRole,
    };

    props.onCreateUser(userData);
    form.current.reset();
  }

  return (
    <div>
      <div>
        <h4 className={styles.heading_h4}>Add new user</h4>
        <h5 className={styles.heading_h5}>
          Remeber to set the Role, all users are basic as default
        </h5>
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
            ref={firstNameInputRef}
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
            ref={lastNameInputRef}
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
            ref={emailInputRef}
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
            ref={passwordInputRef}
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
            ref={companyInputRef}
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
            ref={roleInputRef}
            className={`${styles.form__input} ${styles.form__input__select}`}
          >
            {" "}
            <option value="BASIC">BASIC</option>
            <option value="ADMIN">ADMIN</option>
            <option value="DEVELOPER">DEVELOPER</option>
          </select>
        </div>

        <div className={styles.form__section_button}>
          <ButtonPrimary type="submit">Submit</ButtonPrimary>
        </div>
      </form>
    </div>
  );
}
