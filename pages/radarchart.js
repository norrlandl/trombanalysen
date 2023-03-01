import styles from "./start.module.scss";

export default function Radarchart() {
  return (
    <div className={styles.flexContainer}>
      <Slide />
      <Login />
    </div>
  );
}
