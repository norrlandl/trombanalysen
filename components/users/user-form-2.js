import Input from "@/lib/input";
import { useRef, useState } from "react";
import { ButtonPrimary } from "../ui/buttons";
import styles from "./user-form.module.scss";

export default function UserFormNew(props) {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = Input((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = Input((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = Input((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = Input((value) => value.trim() !== "");

  const {
    value: enteredCompany,
    isValid: enteredCompanyIsValid,
    hasError: companyInputHasError,
    valueChangeHandler: companyChangeHandler,
    inputBlurHandler: companyBlurHandler,
    reset: resetCompanyInput,
  } = Input((value) => value.trim() !== "");

  const {
    value: enteredRole,
    isValid: enteredRoleIsValid,
    hasError: roleInputHasError,
    valueChangeHandler: roleChangeHandler,
    inputBlurHandler: roleBlurHandler,
    reset: resetRoleInput,
  } = Input((value) => value.trim() !== "");

  // let formIsValid = false;

  // if (enteredFirstNameIsValid && enteredEmailIsValid) {
  //   formIsValid = true;
  // }

  async function formSubmitHandler(e) {
    e.preventDefault();

    console.log(
      enteredFirstName,
      enteredLastName,
      enteredCompany,
      enteredEmail,
      enteredPassword,
      enteredRole
    );

    const userData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
      company: enteredCompany,
      role: enteredRole,
    };

    props.onCreateUser(userData);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPasswordInput();
    resetCompanyInput();
    resetRoleInput("BASIC");
  }

  return (
    <div>
      <div>
        <h4 className={styles.heading_h4}>Add new user</h4>
        <h5 className={styles.heading_h5}>
          Remeber to set the Role, all users are basic as default
        </h5>
      </div>

      <form
        onSubmit={formSubmitHandler}
        // ref={form}
        className={styles.form}
      >
        <div className={styles.form__section}>
          <label htmlFor="firstName" className={styles.form__label}>
            First name
          </label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
            className={styles.form__input}
          />
          {/* {nameInputHasError && <p>Name must not be empty</p>} */}
        </div>

        <div className={styles.form__section}>
          <label htmlFor="lastName" className={styles.form__label}>
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="email" className={styles.form__label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="password" className={styles.form__label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="company" className={styles.form__label}>
            Company
          </label>
          <input
            type="text"
            id="company"
            onChange={companyChangeHandler}
            onBlur={companyBlurHandler}
            value={enteredCompany}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="role" className={styles.form__label}>
            Role
          </label>
          <select
            type="text"
            id="role"
            onChange={roleChangeHandler}
            onBlur={roleBlurHandler}
            value={enteredRole}
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
