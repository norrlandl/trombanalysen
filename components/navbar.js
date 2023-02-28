import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Terms</a>
    </div>
  );
}
