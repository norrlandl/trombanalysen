import styles from "./index.module.scss";

export default function Admin() {
  return (
    <div className="">
      <h1 className={styles.heading_h1}>USERS</h1>
      <form method="post" className={styles.login__form}>
        <label for="company" className={styles.form__label}>
          Company
        </label>
        <input type="text" className={styles.form__input} id="company"></input>

        <label for="role" className={styles.form__label}>
          Role
        </label>
        <select id="role" className={styles.form__input} name="Basic">
          <option value="basic">Basic</option>
          <option value="admin">Admin</option>
          <option value="reading">Reading</option>
        </select>

        <label for="firstname" className={styles.form__label}>
          First name
        </label>
        <input
          type="text"
          className={styles.form__input}
          id="firstname"
        ></input>

        <label for="lastname" className={styles.form__label}>
          Last name
        </label>
        <input type="text" className={styles.form__input} id="lastname"></input>

        <label for="email" className={styles.form__label}>
          Email
        </label>
        <input type="email" className={styles.form__input} id="email"></input>

        <label for="password" className={styles.form__label}>
          Password
        </label>
        <input
          type="password"
          className={styles.form__input}
          id="password"
        ></input>
      </form>
    </div>
  );
}
