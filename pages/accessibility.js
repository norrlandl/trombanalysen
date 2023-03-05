import styles from "./accessibility.module.scss";
import Link from "next/link";

import Image from "next/image";
import icon_accessibility from "../public/icon_accessibility.svg";
import img from "../public/img.svg";

export default function Accessibility() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.item}>
        <div className={styles.item__text}>
          <Image
            src={icon_accessibility}
            className={styles.icon}
            alt="icon for accessibility"
          />
          <h1 className={styles.heading_h1}>ACCESSIBILITY</h1>
          <p className={styles.paragraph}>
            Morbi cursus felis diam, vel elementum ligula tristique quis.
            Curabitur sed convallis nulla. Donec venenatis feugiat pulvinar. Sed
            egestas ut velit nec faucibus. Suspendisse ut ex eleifend.
          </p>
          <h5 className={styles.heading_h5}>Leo AIuis cursus </h5>
          <p className={styles.paragraph}>
            Morbi a ante in orci vestibulum dapibus vel sit amet lorem. Nullam
            congue enim lorem, sit amet rutrum massa consectetur id. Nam vel
            orci non sem tristique finibus nec volutpat dolor. Maecenas laoreet,
            mi et egestas bibendum, nisl lorem feugiat nulla, eu placerat augue
            justo gravida metus.
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.item__img}>
          <Image src={img} className={styles.logo} alt="logo" />
        </div>
      </div>
      <div className={styles.item__fullwidth}>
        <Link href="/radarchart" legacyBehavior>
          <a className={`${styles.btn} ${styles.btn__secondary}`}>
            &larr; Radarchart
          </a>
        </Link>
        <Link href="/radarchart" legacyBehavior>
          <a className={`${styles.btn} ${styles.btn__tertiary}`}>
            Analysis &uarr;
          </a>
        </Link>
        <Link
          href="/responsive"
          legacyBehavior
          className={styles.item__fullwidth__right}
        >
          <a
            className={`${styles.btn} ${styles.btn__primary} ${styles.item__fullwidth__right}`}
          >
            Responsive &rarr;
          </a>
        </Link>
      </div>
    </div>
  );
}
