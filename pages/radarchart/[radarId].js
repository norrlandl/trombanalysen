import styles from "./radarchart.module.scss";
import Link from "next/link";

import Image from "next/image";
import img from "../../public/img.svg";

export default function Radarchart() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.item}>
        <div className={styles.item__text}>
          <h5 className={styles.heading_h5}>Duis euismod ut</h5>
          <h1 className={styles.heading_h1}>tincidunt turpis</h1>
          <p className={styles.paragraph}>
            Leo quis cursus at risus nunc diam morbi adipiscing. Semper quisque
            quis integer senectus elementum. Aliquet massa tellus vehicula fames
            aliquet.
          </p>
          <Link href="/accessibility" legacyBehavior>
            <a className={`${styles.btn} ${styles.btn__primary}`}>
              Dive deeper &rarr;
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
