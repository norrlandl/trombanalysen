import Login from "./login";
import Slide from "./slide";
import styles from "./index.module.scss";

export default function Start() {
  return (
    <div className={`${styles.flexContainer} ${styles.noPadding}`}>
      {/* <Slide /> */}
      <Login />
    </div>
  );
}
