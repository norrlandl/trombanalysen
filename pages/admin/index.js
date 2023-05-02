import AdminLayout from "@/components/layout/adminLayout";

import styles from "./index.module.scss";

import { ButtonPrimary } from "@/components/ui/buttons";
import { useSession } from "next-auth/react";

export default function Admin() {
  // const [session, loading] = useSession();
  // const { data: session, status } = useSession();
  // const loading = status === "loading";

  return (
    <AdminLayout>
      <h1 className={styles.heading_h1}>DASHBOARD</h1>
      <div>
        <h4 className={styles.heading_h4}>All projects</h4>
        <h5 className={styles.heading_h5}>Sort by name, role, date</h5>
      </div>
      <ButtonPrimary link={`/admin/users/`}>Users</ButtonPrimary>
    </AdminLayout>
  );
}
