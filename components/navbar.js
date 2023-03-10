import styles from "./Navbar.module.scss";
import Image from "next/image";
import toggle from "../public/toggle.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Image
          src={toggle}
          className={styles.logo}
          alt="toggle dark-lightmode"
        />
      </div>
      <div>
        <Link href="/" legacyBehavior>
          <a>HAM MENU</a>
        </Link>
      </div>
    </nav>
  );
}
