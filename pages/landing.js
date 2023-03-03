import styles from "./landing.module.scss";
import Link from "next/link";

import Image from "next/image";
import img from "../public/img.svg";

export default function Landing() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.item}>
        <div className={styles.item__text}>
          <h5 className={styles.heading_h5}>Duis euismod ut</h5>
          <h1 className={styles.heading_h1}>
            Id volutpat enim nulla platea arcu tincidunt turpis.
          </h1>
          <Link href="/radarchart" legacyBehavior>
            <a className={`${styles.btn} ${styles.btn__primary}`}>
              Results & score &rarr;
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.item__img}>
          <Image src={img} className={styles.logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
