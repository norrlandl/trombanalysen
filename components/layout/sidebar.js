import { useRouter } from "next/router";
import styles from "./sidebar.module.scss";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { SiGoogleanalytics } from "react-icons/si";
import { FaRegUserCircle } from "react-icons/fa";
import { ButtonPrimary } from "../ui/buttons";

const sidebarLinks = [
  {
    title: "Dashboard",
    link: "/admin",
    icon: RxDashboard,
  },
  {
    title: "Analysis",
    link: "/admin/analysis",
    icon: SiGoogleanalytics,
  },
  {
    title: "User",
    link: "/admin/users",
    icon: FaRegUserCircle,
  },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <div>
      <aside className={styles.sidebar}>
        <div className={styles.sidebar__top}>
          <div>Firstname Lastname Admin</div>
        </div>

        <ul className={styles.sidebar__list}>
          <div className={styles.sidebar__newAnalysis}>
            <ButtonPrimary link={`/admin/users/`}>+ New analysis</ButtonPrimary>
          </div>

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
        </ul>
      </aside>
    </div>
  );
}