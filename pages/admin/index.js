import AdminLayout from "@/components/layout/adminLayout";
import styles from "./index.module.scss";
import { ButtonPrimary } from "@/components/ui/buttons";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "../api/auth/[...nextauth]";
// import { useSession } from "next-auth/react";

import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Admin() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href = "/";
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p>Loading..</p>;
  // } else {}

  return (
    <AdminLayout>
      <h1 className={styles.heading_h1}>DASHBOARD</h1>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <div>
        <h4 className={styles.heading_h4}>All projects</h4>
        <h5 className={styles.heading_h5}>Sort by name, role, date</h5>
      </div>
      <ButtonPrimary link={`/admin/users/`}>Users</ButtonPrimary>
    </AdminLayout>
  );
}

// const { data, status } = useSession();

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
    // props: {
    //   user: session.user,
    // },
  };
}
