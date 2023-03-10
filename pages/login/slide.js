import styles from "./slide.module.scss";
import Image from "next/image";
import slideImg from "../../public/slide-1.svg";

export default function Slide() {
  return (
    <section className={styles.slide}>
      <div className={styles.slide__item}>
        <div className={styles.slide__imgWrapper}>
          <Image src={slideImg} className={styles.slide__img} alt="slide" />
        </div>
        <div className={styles.slide__text}>
          <h4 className={`${styles.heading_h4} ${styles.slide__heading}`}>
            At odio faucibus bibendum in volutpat.
          </h4>
          <p className={styles.paragraph}>
            Porttitor sem pellentesque accumsan in tortor nisl viverra. Leo
            gravida adipiscing id volutpat.
          </p>
          <span className={styles.slide__dot}></span>
          <span className={styles.slide__dot}></span>
          <span className={styles.slide__dot}></span>
        </div>
      </div>
    </section>
  );
}
