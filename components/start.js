import Login from "@/pages/login";
import Slide from "./slide";
import styles from "./start.module.scss";

export default function Start() {
  return (
    <div className={styles.flexContainer}>
      <Slide />
      <Login />
    </div>
  );
}
