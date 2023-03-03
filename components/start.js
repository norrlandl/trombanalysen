import Login from "@/pages/login";
import Slide from "./Slide";
import styles from "./Start.module.scss";

export default function Start() {
  return (
    <div className={`${styles.flexContainer} ${styles.noPadding}`}>
      <Slide />
      <Login />
    </div>
  );
}
