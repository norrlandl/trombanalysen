import styles from "./login.module.scss";
import Image from "next/image";
import img from "../../public/img.svg";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  return (
    <section className={styles.login}>
      <div className={styles.login__item}>
        <div className={styles.login__text}>
          <Image src={img} className={styles.login__img} alt="logo" />
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

          <button
            type="submit"
            className={`${styles.btn} ${styles.btn__primary} ${styles.btn__big}`}
            href="../radarchart"
          >
            Logga in
          </button>
          <div className={styles.login__form_forgot}>
            <a>Kom ihåg</a>
            <a>Glömt lösenord?</a>
            <Link href="/landing">Radar chart</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
