import AdminLayout from "@/components/layout/adminLayout";

import styles from "./index.module.scss";

import { ButtonSecondary } from "@/components/ui/buttons";

export default function Analysis() {
  return (
    <AdminLayout>
      <div className={styles.content}>
        <h1 className={styles.heading_h1}>ANALYSIS</h1>
        <ButtonSecondary link={`/admin/users/`}>Users</ButtonSecondary>
      </div>
    </AdminLayout>
  );
}
