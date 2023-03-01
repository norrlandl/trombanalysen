import styles from "./navbar.module.scss";
import Image from "next/image";
import toggle from "../public/toggle.svg";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Image
          src={toggle}
          className={styles.logo}
          alt="toggle dark-lightmode"
        />
      </div>
      <div>
        <a href="#">HAM MENU</a>
      </div>
    </div>
  );
}
