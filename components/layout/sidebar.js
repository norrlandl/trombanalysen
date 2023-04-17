import React from "react";
import styles from "./sidebar.module.scss";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { SiGoogleanalytics } from "react-icons/si";
import { FaRegUserCircle } from "react-icons/fa";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: RxDashboard,
  },
  {
    name: "Analysis",
    href: "/admin",
    icon: SiGoogleanalytics,
  },
  {
    name: "User",
    href: "/admin/users",
    icon: FaRegUserCircle,
  },
];

export default function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <div className={styles.sidebar__top}>
          <div>Firstname Lastname Admin</div>
        </div>
        <ul className={styles.sidebar__list}>
          {sidebarItems.map(({ name, href, icon: Icon }) => (
            <li className={styles.sidebar__item} key={name}>
              <Link href={href} className={styles.sidebar__link}>
                <span className={styles.sidebar__icon}>
                  <Icon />
                </span>
                <span className={styles.sidebar__name}>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
