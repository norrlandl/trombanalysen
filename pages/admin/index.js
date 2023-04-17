import AdminLayout from "@/components/layout/adminLayout";

import styles from "./index.module.scss";

import { ButtonPrimary } from "@/components/ui/buttons";

export default function Admin() {
  return (
    <AdminLayout>
      <div className={styles.content}>
        <h1 className={styles.heading_h1}>DASHBOARD</h1>
        <ButtonPrimary link={`/admin/users/`}>Users</ButtonPrimary>
      </div>
    </AdminLayout>
  );
}
