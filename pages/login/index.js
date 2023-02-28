import styles from "./index.module.scss";

export default function Login() {
  return (
    <section className={styles.login}>
      <div className={styles.login__item}>
        <div className={styles.login__text}>
          <h4 className={`${styles.heading_h2} ${styles.login__heading}`}>
            Välkommen till trombanalysen
          </h4>
          <p className={styles.paragraph}>
            Porttitor sem pellentesque accumsan in tortor nisl viverra. Leo
            gravida adipiscing id volutpat.
          </p>
        </div>

        <form
          action="/send-data-here"
          method="post"
          className={styles.login__form}
        >
          <input
            type="text"
            className={styles.form__input}
            placeholder="Username"
            id="username"
            required
          />
          <label className={styles.form__label} for="username">
            Username
          </label>

          <input
            type="password"
            className={styles.form__input}
            placeholder="Password"
            id="password"
            required
          />

          <label className={styles.form__label} for="password">
            Password
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
