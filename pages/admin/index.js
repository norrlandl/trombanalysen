import Sidebar from "@/components/layout/sidebar";
import styles from "./index.module.scss";
import { ButtonPrimary } from "@/components/ui/buttons";
import Navbar from "@/components/layout/navbar";

export default function Admin() {
  return (
    <div className="">
      <Sidebar />
      <h1 className={styles.heading_h1}>DASHBOARD</h1>

      <ButtonPrimary link={`/admin/users/`}>Users</ButtonPrimary>
      <p></p>
    </div>
  );
}
