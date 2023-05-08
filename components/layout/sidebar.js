import { useRouter } from "next/router";
import styles from "./sidebar.module.scss";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { SiGoogleanalytics } from "react-icons/si";
import { FaRegUserCircle } from "react-icons/fa";
import { BiMessageSquareAdd } from "react-icons/bi";
import { signOut } from "next-auth/react";

const sidebarLinks = [
  {
    title: "Dashboard",
    link: "/admin",
    icon: RxDashboard,
  },
  {
    title: "Analyses",
    link: "/admin/analyses",
    icon: SiGoogleanalytics,
  },
  {
    title: "Users",
    link: "/admin/users",
    icon: FaRegUserCircle,
  },
];

export default function Sidebar() {
  const router = useRouter();
  // const session = getServerSession();

  // function handler(req, res) {
  //   const session = getSession();
  // }

  // console.log(session);

  function logoutHandler() {
    signOut(router.replace("/"));
  }

  return (
    <div>
      <aside className={styles.sidebar}>
        <div className={styles.sidebar__top}>
          <div> Lastname Admin</div>
        </div>

        <ul className={styles.sidebar__list}>
          <li className={styles.sidebar__item_new}>
            <Link
              href="/admin/analyses"
              className={`${styles.sidebar__link} ${styles.sidebar__link_new}`}
            >
              <span
                className={`${styles.sidebar__icon} ${styles.sidebar__icon_new}`}
              >
                <BiMessageSquareAdd />{" "}
              </span>
              <span className={styles.sidebar__title}>New analysis</span>
            </Link>
          </li>

          {sidebarLinks.map(({ title, link, icon: Icon }) => (
            <li className={styles.sidebar__item} key={title}>
              <Link
                href={link}
                className={`${
                  router.pathname === link
                    ? styles.sidebar__link_active
                    : styles.sidebar__link
                }`}
              >
                <span className={styles.sidebar__icon}>
                  <Icon />
                </span>
                <span className={styles.sidebar__title}>{title}</span>
              </Link>
            </li>
          ))}
          <li className={styles.sidebar__item}>
            {/* <Link className={styles.sidebar__link} legacyBehavior>
              <span className={styles.sidebar__icon}>
                <BiMessageSquareAdd />
              </span>
            </Link> */}
            <button className={styles.sidebar__title} onClick={logoutHandler}>
              Log out
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
}
