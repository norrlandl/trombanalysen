import Sidebar from "@/components/layout/sidebar";
import styles from "./adminLayout.module.scss";

export default function AdminLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
